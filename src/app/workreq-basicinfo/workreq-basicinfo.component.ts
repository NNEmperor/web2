import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessagePassingService } from '../message-passing.service';
import {MatDialog} from '@angular/material/dialog';
import { WorkReqIncidentPopUpComponent } from '../work-req-incident-pop-up/work-req-incident-pop-up.component';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { Location } from "@angular/common";
import { WorkReqServiceService } from '../work-req-service.service';
import { WrBasicInfoPopUpComponent } from '../wr-basic-info-pop-up/wr-basic-info-pop-up.component';
import { HttpErrorResponse } from '@angular/common/http';
import { NotifierService } from 'angular-notifier';


@Component({
  selector: 'app-workreq-basicinfo',
  templateUrl: './workreq-basicinfo.component.html',
  styleUrls: ['./workreq-basicinfo.component.css']
})
export class WorkreqBasicinfoComponent implements OnInit {

  private readonly notifier!: NotifierService;
  uneseno=false;      //AKO JE NESTO UNETO U NEKO POLJE
  public today;
  selectedStartDate:any;
  //minDate = new Date();
  works = this.getWorkTypes();
  workReqBasicForm: FormGroup = new FormGroup({
    /*'userName' : new FormControl('', [Validators.required, Validators.email]),
    'password': new FormControl('', Validators.required),*/

    'docType': new FormControl('1'),
    'status': new FormControl('Draft'),   //setovati na osnovu vrednosti iz baze
    'incident': new FormControl,
    'street': new FormControl('',[Validators.required, Validators.minLength(3)]),
    'startdate': new FormControl(null,Validators.required),
    'starttime': new FormControl(null,Validators.required),
    'enddate': new FormControl({value: null, disabled: true}, Validators.required),
    'endtime': new FormControl({value: null, disabled: true}, Validators.required),
    'creator': new FormControl('logovan user'),//automatski popunjava,onaj koji to radi,uzeti vrednost trenutno ulogovanog usera
    'purpose': new FormControl('',[Validators.required]), //svrha
    'notes': new FormControl('',[Validators.required]),
    'emergency': new FormControl(false),
    'company': new FormControl('',[Validators.required]),
    'phoneNo': new FormControl('',[Validators.required]),
    'cratedate': new FormControl(),   //automatski
    'cratetime': new FormControl(),   //automatski

});
/*Tip dokumenta: koji može biti: Planirani rad, Neplanirani rad
● Status: status dokumenta će biti Draft automatski ukoliko se kreira novi dokument, a ukoliko je već postojeći dokument stanje će biti takođe automatski povučeno iz baze.
● Incident: ukoliko je rad potreban da bi se resio incident, moguće je iz liste incidenata uvezati ga sa nalogom za rad, klikom na ID moguće je otvoriti dati incident.
● Ulica: ulica u kojoj se vrši rad
● Datum i vreme početka rada
● Datum i vreme završetka rada
● Kreirano od strane (automatski se popunjava sa logovanim korisnikom)
● Svrha: tekstualno polje za unos svrhe datog rada
● Beleške: tekstualno polje za dodatne informacije
● Hitan rad: Check-box za markiranje hitnog rada
● Kompanija: kompanija koja izvršava rad
● Telefonski broj: kontakt telefon od onog ko je prijavio nalog za rad
● Datum i vreme kreiranja dokumenta (automatski se popunjava) */

constructor(private service: MessagePassingService, public dialog: MatDialog ,private router: Router,location: Location, private servis:WorkReqServiceService, notifierService: NotifierService) {
  this.service.changeData("WORK REQUEST - NEW - Basic Information")

  this.notifier = notifierService;

    const currentDate:Date = new Date();
    let dd:any = currentDate.getDate();
    let mm:any = currentDate.getMonth()+1;
    let yyyy:any = currentDate.getFullYear();

    if(dd<10) {
        dd = '0'+dd
    } 

    if(mm<10) {
        mm = '0'+mm
    } 

    this.today = yyyy + '-' + mm + '-' + dd;

    
   }

  ngOnInit(): void {
    //this.todayDate=this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.workReqBasicForm.controls['cratedate'].setValue(new Date().toISOString().split('T')[0]);//(new Date().getDate());
    let now = new Date();
    let hours = ("0" + now.getHours()).slice(-2);
    let minutes = ("0" + now.getMinutes()).slice(-2);
    let str = hours + ':' + minutes;
    this.workReqBasicForm.controls['cratetime'].setValue(str);

    /*var sTaJeUnEtO=localStorage.getItem("uneseno");
    if(sTaJeUnEtO==="jeste"){
      alert("uneeeeto nes DIJALOG SHOW");
      const dialogRef = this.dialog.open(WrBasicInfoPopUpComponent);
      //localStorage.removeItem("uneseno");
      dialogRef.afterClosed().subscribe(() => {
        // Do stuff after the dialog has closed
        alert("zatvoren dijalog")
        let DaLiSeCuva= localStorage.getItem("cuva")
        if(DaLiSeCuva=='da'){
          console.log("CUVA BI, OSTANI")
        }else{
          console.log("ne cuva BI, IDI NA SL STR")
        }
    });

      
    }else{
      alert("NEMA DIJALOGA")
    }*/
    
  
  }
  getWorkTypes(){
    return [
      { id: '1', name: 'Planned Work' },
      { id: '2', name: 'Unplanned work' }
    ];
  }

  selectChangeHandler (event: any) {
    //update the ui
    const selectedType = event.target.value;
    console.log(selectedType);
    this.workReqBasicForm.controls['docType'].setValue(selectedType);
  }
  disableOldDates(event:any){

    const inputValue = event.target.value;
    console.log("DAAATUM  : "+inputValue);
   
      this.selectedStartDate = inputValue;//yyyyend + '-' + mmend + '-' + ddend;
      console.log("DATUM  na kraju : "+this.selectedStartDate)
      this.workReqBasicForm.controls['enddate'].enable(); //moze se odabrati,sprecava da se izabere pre start date
    //}
  }
unos($event){
  console.log('kkk')
  this.uneseno=true;
  localStorage.setItem("uneseno","BINFOjeste");
}
unoss(){
  console.log('jjj')
  this.uneseno=true;
  localStorage.setItem("uneseno","BINFOjeste");
}
  enableEnfTime(event:any){
    this.workReqBasicForm.controls['endtime'].enable();
  }

  onDragChange() {
   // console.log(this.allMineEnable.value);

    //false je ALL
    //true MINE
  } 

  openIncidents(){
    let dialogRef = this.dialog.open(WorkReqIncidentPopUpComponent);
  }

  SaveBasicInfo(){
    alert("aaaaaaaaa")
    localStorage.removeItem("uneseno"); //ODMAH I OBRISI DA NE OSTANE
    if(this.uneseno){
    this.servis.SaveBasicInfo(this.workReqBasicForm).subscribe();
    }else{
      console.log("nema sta da se cuva")
    }
  }

  ClearBasicInfo(){
     //ODMAH I OBRISI DA NE OSTANE
    
    //brisi formu
    this.workReqBasicForm.reset();
    this.workReqBasicForm.controls['status'].setValue('Draft');
    this.workReqBasicForm.controls['creator'].setValue("logovan user")  //  UZETI VREDNOST I PONOVO SETOVATI----!!!!!!!!!!!!!!!!!!!---
    this.uneseno=false;
    localStorage.removeItem("uneseno");
  }

  AddBasicInfo(){
    //dodace u bazu
    this.servis.AddBasicInfo(this.workReqBasicForm).subscribe((data:any) =>{

      if(data.succeeded){
        //alert("Uspesno dodat tim!  da li ovo prikaze");  //ne udje, ali sa servera ispise
      }
      
     }, (err:HttpErrorResponse) => {
       console.log(err)
       
       let message= err.error.text;
      // alert(message);
 
      if(message==="Succeesfully added work request"){
       this.notifier.notify('default', message);
       this.router.navigateByUrl('/home/work-requests');
      
     }
       
      
    })
  }

}

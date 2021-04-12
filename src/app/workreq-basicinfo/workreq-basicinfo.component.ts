import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-workreq-basicinfo',
  templateUrl: './workreq-basicinfo.component.html',
  styleUrls: ['./workreq-basicinfo.component.css']
})
export class WorkreqBasicinfoComponent implements OnInit {

  public today;
  selectedStartDate:any;
  //minDate = new Date();
  works = this.getWorkTypes();
  workReqBasicForm: FormGroup = new FormGroup({
    'userName' : new FormControl('', [Validators.required, Validators.email]),
    'password': new FormControl('', Validators.required),

    'docType': new FormControl('1'),
    'status': new FormControl('Draft'),   //setovati na osnovu vrednosti iz baze
    'incident': new FormControl,
    'street': new FormControl,
    'startdate': new FormControl(null),
    'starttime': new FormControl,
    'enddate': new FormControl({value: null, disabled: true}),
    'endtime': new FormControl({value: null, disabled: true}),
    'creator': new FormControl('logovan user'),//automatski popunjava,onaj koji to radi,uzeti vrednost trenutno ulogovanog usera
    'purpose': new FormControl, //svrha
    'notes': new FormControl,
    'emergency': new FormControl(false),
    'company': new FormControl,
    'phoneNo': new FormControl,
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

  constructor() {

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

  enableEnfTime(event:any){
    this.workReqBasicForm.controls['endtime'].enable();
  }

  onDragChange() {
   // console.log(this.allMineEnable.value);

    //false je ALL
    //true MINE
  } 

}

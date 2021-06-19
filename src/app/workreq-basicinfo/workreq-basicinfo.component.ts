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
  works = this.getWorkTypes();
  getUser(){
    let jsonObj;
    jsonObj =localStorage.getItem('user')
    let objObj = JSON.parse(jsonObj)
    return objObj.UserName;
  }
  workReqBasicForm: FormGroup = new FormGroup({
   
    'docType': new FormControl('1'),
    'status': new FormControl('Draft'),   //setovati na osnovu vrednosti iz baze
    'incident': new FormControl,
    'street': new FormControl('',[Validators.required, Validators.minLength(3)]),
    'startdate': new FormControl('',Validators.required),
    'starttime': new FormControl('',Validators.required),
    'enddate': new FormControl({value: '', disabled: true}, Validators.required),
    'endtime': new FormControl({value: '', disabled: true}, Validators.required),
    'creator': new FormControl(this.getUser()),//automatski popunjava,onaj koji to radi,uzeti vrednost trenutno ulogovanog usera
    'purpose': new FormControl('',[Validators.required]), //svrha
    'notes': new FormControl('',[Validators.required]),
    'emergency': new FormControl(false),
    'company': new FormControl('',[Validators.required]),
    'phoneNo': new FormControl('',[Validators.required]),
    'cratedate': new FormControl(),   //automatski
    'cratetime': new FormControl(),   //automatski,
    'id': new FormControl('ciao')

});

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


    //***
    let oob;
    oob=localStorage.getItem("history-wr")
      if(oob!=null){//ako JE  u history da setuje,automatski STATUS
        //alert(oob)
        let state=JSON.parse(oob)
        //alert(state.state)
        let stanjee;
        if(state.state==2){
          stanjee='Deny'
      }else if(state.state==3){
        stanjee='Cancle'
      }else if(state.state==4){
         stanjee="Draft"
      }else{
       stanjee="Approve"
      }
        this.workReqBasicForm.controls['status'].setValue(stanjee);
        console.log(this.workReqBasicForm)
      }
    // */


    let INFF;
    INFF=localStorage.getItem("basic-info");
    if(INFF==null){


    this.servis.GenerateWorkID().subscribe(res=>{
      // alert('kk')
     }, (err:HttpErrorResponse) => {
       //alert("uslo")
       console.log(err)
       let message= err.error.text;
       console.log("ID jjj"+message);
       var temp=localStorage.getItem("id-wr");
      // if(temp==null)
      {
         alert("pppp")
        localStorage.setItem("id-wr",message);    //ID WORK REQUESTA
        this.workReqBasicForm.controls['id'].setValue(message);
       }
      // this.router.navigateByUrl('/workreq-new');
    
       //nema inicijalnu vrednost basic inf
       var formObj=this.workReqBasicForm.getRawValue()
       let serializedForm = JSON.stringify(formObj);
       console.log("----json--start--")
       console.log(serializedForm);

       let jsonObj;
    jsonObj =localStorage.getItem('user')
    let objObj = JSON.parse(jsonObj)
    this.workReqBasicForm.controls['creator'].setValue(objObj.UserName);

       localStorage.setItem("basic-info",serializedForm);

     });

     }else{
       //postoji nesto uneto
       //dodeliti vrednosti
       let savedObj=JSON.parse(INFF);
       console.log(savedObj)
       console.log(savedObj.id)

       let oob;
       oob=localStorage.getItem("history-wr")
         if(oob!=null){//ako JE  u history da setuje,automatski STATUS
           //alert(oob)
           let state=JSON.parse(oob)
           //alert(state.state)
           let stanjee;
           if(state.state==2){
               stanjee='Deny'
           }else if(state.state==3){
             stanjee='Cancle'
           }else if(state.state==4){
              stanjee="Draft"
           }else{
            stanjee="Approve"
           }
           this.workReqBasicForm.controls['status'].setValue(stanjee);
           console.log(this.workReqBasicForm)
         }else{
          this.workReqBasicForm.controls['status'].setValue(savedObj.status)
         }

       this.workReqBasicForm.controls['id'].setValue(savedObj.id)
       this.workReqBasicForm.controls['docType'].setValue(savedObj.docType)
       //this.workReqBasicForm.controls['status'].setValue(savedObj.status)
       this.workReqBasicForm.controls['incident'].setValue(savedObj.incident)
       this.workReqBasicForm.controls['street'].setValue(savedObj.street)
       this.workReqBasicForm.controls['startdate'].setValue(savedObj.startdate)
       this.workReqBasicForm.controls['starttime'].setValue(savedObj.starttime)
       this.workReqBasicForm.controls['enddate'].setValue(savedObj.enddate)
       this.workReqBasicForm.controls['endtime'].setValue(savedObj.endtime)
       this.workReqBasicForm.controls['creator'].setValue(savedObj.creator)
       this.workReqBasicForm.controls['purpose'].setValue(savedObj.purpose)
       this.workReqBasicForm.controls['notes'].setValue(savedObj.notes)
       this.workReqBasicForm.controls['emergency'].setValue(savedObj.emergency)
       this.workReqBasicForm.controls['company'].setValue(savedObj.company)
       this.workReqBasicForm.controls['phoneNo'].setValue(savedObj.phoneNo)
       this.workReqBasicForm.controls['cratedate'].setValue(savedObj.cratedate)
       this.workReqBasicForm.controls['cratetime'].setValue(savedObj.cratetime)
     }

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
     
      var formObj=this.workReqBasicForm.getRawValue()
      let serializedForm = JSON.stringify(formObj);
      console.log("JSOOON....")
      console.log(serializedForm);

      localStorage.setItem("basic-info",serializedForm);

      console.log("NORMALNO")
      let ooo=localStorage.getItem("basic-info");
      let obj=JSON.parse(ooo as string);
      console.log(obj)

    //this.servis.SaveBasicInfo(this.workReqBasicForm).subscribe();   //MOZDA MI NI NE TREBA HAH HAHA HAHAH
    }else{
      console.log("nema sta da se cuva")
    }
  }

  ClearBasicInfo(){
     //ODMAH I OBRISI DA NE OSTANE
    
    //brisi formu
    this.workReqBasicForm.reset();
    var temp=localStorage.getItem("id-wr");
    this.workReqBasicForm.controls['docType'].setValue('1');
    this.workReqBasicForm.controls['id'].setValue(temp);
    //this.workReqBasicForm.controls['status'].setValue('Draft');
    let oob;
    oob=localStorage.getItem("history-wr")
      if(oob!=null){//ako JE  u history da setuje,automatski STATUS
        //alert(oob)
        let state=JSON.parse(oob)
        //alert(state.state)
        let stanjee;
        if(state.state==2){
          stanjee='Deny'
      }else if(state.state==3){
        stanjee='Cancle'
      }else if(state.state==4){
         stanjee="Draft"
      }else{
       stanjee="Approve"
      }
        this.workReqBasicForm.controls['status'].setValue(stanjee);
        console.log(this.workReqBasicForm)
      }else{
        this.workReqBasicForm.controls['status'].setValue('Draft');
      }
    let jsonObj;
    jsonObj =localStorage.getItem('user')
    let objObj = JSON.parse(jsonObj)
    this.workReqBasicForm.controls['creator'].setValue(objObj.UserName);
    
    this.workReqBasicForm.controls['cratedate'].setValue(new Date().toISOString().split('T')[0]);//(new Date().getDate());
    let now = new Date();
    let hours = ("0" + now.getHours()).slice(-2);
    let minutes = ("0" + now.getMinutes()).slice(-2);
    let str = hours + ':' + minutes;
    this.workReqBasicForm.controls['cratetime'].setValue(str);

    this.workReqBasicForm.controls['startdate'].setValue('')
       this.workReqBasicForm.controls['starttime'].setValue('')
       this.workReqBasicForm.controls['enddate'].setValue('')
       this.workReqBasicForm.controls['endtime'].setValue('')
    //this.workReqBasicForm.controls['creator'].setValue("logovan user")  //  UZETI VREDNOST I PONOVO SETOVATI----!!!!!!!!!!!!!!!!!!!---
    this.uneseno=false;
    localStorage.removeItem("uneseno");

    var formObj=this.workReqBasicForm.getRawValue()
      let serializedForm = JSON.stringify(formObj);
      console.log("JSOOON....")
      console.log(serializedForm);

      localStorage.setItem("basic-info",serializedForm);
  }

  ngAfterViewInit(){

    var forma=localStorage.getItem("basic-info")
    if(forma==null){
      alert("nema inf")
    }
  
  }

  

}

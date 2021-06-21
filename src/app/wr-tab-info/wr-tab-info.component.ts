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
import { PopUpIncComponent } from '../pop-up-inc/pop-up-inc.component';

@Component({
  selector: 'app-wr-tab-info',
  templateUrl: './wr-tab-info.component.html',
  styleUrls: ['./wr-tab-info.component.css']
})
export class WrTabInfoComponent implements OnInit {

  private readonly notifier!: NotifierService;
  uneseno=false;      //AKO JE NESTO UNETO U NEKO POLJE
  public today;
  selectedStartDate:any;
  works = this.getWorkTypes();
  nrSelect!:string
 
  workReqBasicForm: FormGroup = new FormGroup({
   
    'docType': new FormControl(''),
    'status': new FormControl(''),   //setovati na osnovu vrednosti iz baze
    'incident': new FormControl,
    'street': new FormControl('',[Validators.minLength(3)]),
    'startdate': new FormControl(''),
    'starttime': new FormControl(''),
    'enddate': new FormControl({value: '', disabled: true}),
    'endtime': new FormControl({value: '', disabled: true}),
    'creator': new FormControl(''),//automatski popunjava,onaj koji to radi,uzeti STARU VREDNOST
    'purpose': new FormControl(''), //svrha
    'notes': new FormControl(''),
    'emergency': new FormControl(false),
    'company': new FormControl(''),
    'phoneNo': new FormControl(''),
    'cratedate': new FormControl(),   //automatski
    'cratetime': new FormControl(),   //automatski,
    'id': new FormControl('ciao')

});

constructor(private service: MessagePassingService, public dialog: MatDialog ,private router: Router,location: Location, private servis:WorkReqServiceService, notifierService: NotifierService) {
  this.service.changeData("WORK REQUEST - UPDATE - Basic Information")

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
    localStorage.removeItem("editovano");
   // alert(localStorage.getItem("editovano"))

    let INFF;
    INFF=localStorage.getItem("basic-info-edit");
    if(INFF==null){     //ako nije cuvana izmena
    //popuniti sa starim vrednostima
    this.FirstValuesOfDoc()
    
    //***
    let oob;
    oob=localStorage.getItem("history-wr-edited")
      if(oob!=null){//ako JE  u history da setuje,automatski STATUS
       // alert("iiiiistorija")
        let state=JSON.parse(oob)
        console.log("iis")
        console.log(state)
        let stanjee;
        if(state.state==2){
          stanjee='Deny'
         // alert("pp1")
      }else if(state.state==3){
        stanjee='Cancle'
      }else if(state.state==4){
         stanjee="Draft"
        // alert("ovdje")
      }else{
       stanjee="Approve"
       //alert("yy1")
      }
        this.workReqBasicForm.controls['status'].setValue(stanjee);
        console.log(this.workReqBasicForm.value.status)
      }
    // */

      
     }else{
      // alert('novo sacuvano setovati')
        //postoji nesto uneto
       //dodeliti vrednosti
       let savedObj=JSON.parse(INFF);
       console.log(savedObj)
       console.log(savedObj.id)

       let oob;
       oob=localStorage.getItem("history-wr-edited")
         if(oob!=null){//ako JE  u history da setuje,automatski STATUS
         //  alert(oob)
           console.log("ovdje2---"+oob)
           let state=JSON.parse(oob)
           //alert(state.state)
           let stanjee;
           if(state.state==2){
               stanjee='Deny'
               //alert("pp2")
           }else if(state.state==3){
             stanjee='Cancle'
           }else if(state.state==4){
              stanjee="Draft"
             // alert("ovdje2")
           }else{
            stanjee="Approve"
            //alert("yy2")
           }
           this.workReqBasicForm.controls['status'].setValue(stanjee);
           console.log(this.workReqBasicForm)
         }else{
           //alert('tuuu2'/*+savedObj.status*/)
           console.log(savedObj)
           //alert(savedObj.status)
          // console.log(savedObj.status)
           //console.log(savedObj.comapany)//wtf
           localStorage.setItem("prvo-stanje",savedObj.status)
          this.workReqBasicForm.controls['status'].setValue(savedObj.status)
         }

       this.workReqBasicForm.controls['id'].setValue(savedObj.id)
       if(savedObj.docType=="1"){
        this.nrSelect="1"
       this.workReqBasicForm.controls['docType'].setValue("1")
      }else{
        this.nrSelect="2"
        this.workReqBasicForm.controls['docType'].setValue("2")
      }
       //this.workReqBasicForm.controls['docType'].setValue(savedObj.docType)
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

  FirstValuesOfDoc(){
    let id;
    id=localStorage.getItem('wr-id')
    this.servis.GetOneWorkRequest(id).subscribe(res=>{
      console.log('rez')
      console.log(res)
      console.log(res['id'])

      this.workReqBasicForm.controls['id'].setValue(res['id'])
      if(res['type']=="Planned Work"){
        this.nrSelect='1'
       this.workReqBasicForm.controls['docType'].setValue("1")
      }else{
        this.nrSelect='2'
        this.workReqBasicForm.controls['docType'].setValue("2")
      }
      let oob;
       oob=localStorage.getItem("history-wr")
         if(oob!=null){//ako JE  u history da setuje,automatski STATUS
           //alert(oob)
           let state=JSON.parse(oob)
           //alert(state.state)
           let stanjee;
           if(state.state==2){
               stanjee='Deny'
               //alert("pp3")
           }else if(state.state==3){
             stanjee='Cancle'
           }else if(state.state==4){
              stanjee="Draft"
              //alert("ovdje3")
           }else{
            stanjee="Approve"
            //alert("yy3")
           }
           this.workReqBasicForm.controls['status'].setValue(stanjee)
          }else{
            //alert('tuuu')
            this.workReqBasicForm.controls['status'].setValue(res['status'])
          }
       //this.workReqBasicForm.controls['status'].setValue(res['historyState'])
       this.workReqBasicForm.controls['incident'].setValue(res['incident'])
       this.workReqBasicForm.controls['street'].setValue(res['street'])
       if(res['startWorkDate']!=''){
        this.workReqBasicForm.controls['enddate'].enable();
       }
       this.workReqBasicForm.controls['startdate'].setValue(res['startWorkDate'])
       if(res['startWorkTime']!=''){
        this.workReqBasicForm.controls['endtime'].enable()
       }
       this.workReqBasicForm.controls['starttime'].setValue(res['startWorkTime'])
       this.workReqBasicForm.controls['enddate'].setValue(res['endWorkDate'])
       this.workReqBasicForm.controls['endtime'].setValue(res['endWorkTime'])
       this.workReqBasicForm.controls['creator'].setValue(res['creator'])
       this.workReqBasicForm.controls['purpose'].setValue(res['purpose'])
       this.workReqBasicForm.controls['notes'].setValue(res['notes'])
       this.workReqBasicForm.controls['emergency'].setValue(res['emergency'])
       this.workReqBasicForm.controls['company'].setValue(res['company'])
       this.workReqBasicForm.controls['phoneNo'].setValue(res['phoneNumber'])
       this.workReqBasicForm.controls['cratedate'].setValue(res['createdDate'])
       this.workReqBasicForm.controls['cratetime'].setValue(res['createdTime'])
       //incidentID faliiiii
       this.workReqBasicForm.controls['incident'].setValue(res['incidentID'])
      })
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
  localStorage.setItem("editovano","BINFOjeste");
}
unoss(){
  console.log('jjj')
  this.uneseno=true;
  localStorage.setItem("editovano","BINFOjeste");
}
  enableEnfTime(event:any){
    this.workReqBasicForm.controls['endtime'].enable();
  }


  openIncidents(){
    let dialogRef = this.dialog.open(PopUpIncComponent);

    dialogRef.afterClosed().subscribe(res =>{
      console.log('-------')
      console.log(res)
      console.log('-------')
        let ii=res as string
      this.workReqBasicForm.controls['incident'].setValue(ii as string)
      var formObj=this.workReqBasicForm.getRawValue()
      let serializedForm = JSON.stringify(formObj);
      console.log("JSOOON....")
      console.log(serializedForm);

      localStorage.setItem("basic-info-edit",serializedForm);  //mora sacuvati izmena
      localStorage.setItem("editovano","BINFOjeste");
      
    })
  }

  SaveBasicInfo(){
   // alert("UPDATEEE")
    localStorage.removeItem("editovano"); //ODMAH I OBRISI DA NE OSTANE
    if(this.uneseno){
     
      var formObj=this.workReqBasicForm.getRawValue()
      let serializedForm = JSON.stringify(formObj);
      console.log("JSOOON....")
      console.log(serializedForm);

      localStorage.setItem("basic-info-edit",serializedForm);

      console.log("NORMALNO")
      let ooo=localStorage.getItem("basic-info-edit");
      let obj=JSON.parse(ooo as string);
      console.log(obj)

    //this.servis.SaveBasicInfo(this.workReqBasicForm).subscribe();   //MOZDA MI NI NE TREBA HAH HAHA HAHAH
    }else{
      console.log("nema sta da se cuva")
    }
  }

  ClearBasicInfo(){
     //VRATIITI NA VREDNOSTI KAD JE KREIRANO,BEZ OVIH NOVIH IZMENA
    
    //brisi formu
    this.workReqBasicForm.reset();
    this.FirstValuesOfDoc()
    let oob;
    oob=localStorage.getItem("history-wr-edited")
      if(oob!=null){//ako JE  u history da setuje,automatski STATUS
        //alert('NN')
        let state=JSON.parse(oob)
        //alert(state.state)
        let stanjee;
        if(state.state==2){
          stanjee='Deny'
          //alert("pp4")
      }else if(state.state==3){
        stanjee='Cancle'
      }else if(state.state==4){
         stanjee="Draft"
         //alert("ovdje4")
      }else{
       stanjee="Approve"
       //alert("yy4")
      }
        this.workReqBasicForm.controls['status'].setValue(stanjee);
        console.log(this.workReqBasicForm)
      }else{
        //alert("ovdje5")
        this.workReqBasicForm.controls['status'].setValue('Draft');
      }
   //---------
    this.uneseno=false;
    localStorage.removeItem("editovano"); //TREBA OBRISATI
    //alert(localStorage.getItem("editovano"));

    var formObj=this.workReqBasicForm.getRawValue()
      let serializedForm = JSON.stringify(formObj);
      console.log("JSOOON....")
      console.log(serializedForm);

      localStorage.removeItem("basic-info-edit");//ako nema bs edit samo uzima original,opet pozove get za njega...i mozda izmeni history
  }

  ngAfterViewInit(){

    /*var forma=localStorage.getItem("basic-info")
    if(forma==null){
      alert("nema inf")
    }*/
    localStorage.removeItem("editovano");
  }

}

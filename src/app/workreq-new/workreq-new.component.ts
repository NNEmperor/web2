import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { prepareEventListenerParameters } from '@angular/compiler/src/render3/view/template';
import { WrBasicInfoPopUpComponent } from '../wr-basic-info-pop-up/wr-basic-info-pop-up.component';
import { MatDialog } from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';
import { NotifierService } from 'angular-notifier';
import { WorkReqServiceService } from '../work-req-service.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-workreq-new',
  templateUrl: './workreq-new.component.html',
  styleUrls: ['./workreq-new.component.css'],
  //styles: ['.router-link-active { background-color: red; }']
})
export class WorkreqNewComponent implements OnInit {

  private readonly notifier!: NotifierService;
  rememberForm:any; //za history

  constructor(private fb: FormBuilder,public location: Location,private router: Router, public dialog: MatDialog,private servis:WorkReqServiceService, notifierService: NotifierService) { 
    
    this.notifier = notifierService;
      
  }

  ngOnInit(): void {
    this.rememberForm=this.fb.group({ //STA CE PITI PODATAK HISTORYJA

      userName:[localStorage.getItem("userName")],
      datum:[new Date().toISOString().split('T')[0]],
      state:['4'] //automatski deny
      
    });
    localStorage.removeItem("basic-info")
    //localStorage.removeItem("history-wr")
  }
 
  Info(){
    
    var path=location.pathname;
    
    if(path=="/home/workreq-new"){
      console.log("ista stranica B I");
    }else{
      console.log("p-->BI")
      this.router.navigateByUrl('/home/workreq-new');
    }
  }
  History(){
    
    var path=location.pathname;
  
    if(path=="/home/workreq-new/workreq-history")
    {
      console.log("ista stranica HI");
    }else
    {
      console.log("p-->HI")
      var sTaJeUnEtO=localStorage.getItem("uneseno");
     
        if(sTaJeUnEtO==="BINFOjeste")
        {
          alert("uneeeeto nes DIJALOG SHOW");
          const dialogRef = this.dialog.open(WrBasicInfoPopUpComponent);
          
          dialogRef.afterClosed().subscribe(() => {
            // Do stuff after the dialog has closed

              alert("zatvoren dijalog")
              let DaLiSeCuva= localStorage.getItem("cuva")

              if(DaLiSeCuva=='da')
              {
                console.log("CUVA BI, OSTANI")

              }else
              {
                console.log("ne cuva BI, IDI NA SL STR")
                localStorage.removeItem("uneseno"); //ODMAH I OBRISI DA NE OSTANE
                this.router.navigateByUrl('/home/workreq-new/workreq-history');
              }
          });
        }
        else
        {
          alert("NEMA DIJALOGA")
          console.log("neMA BI, IDI NA SL STR")
          this.router.navigateByUrl('/home/workreq-new/workreq-history');
        }
    
    }
  }

  Media(){
    
    var path=location.pathname;
    
    if(path=="/home/workreq-new/workreq-multimedia"){
      console.log("ista stranica MEDIA");
    }else{
      console.log("p-->MED")
      var sTaJeUnEtO=localStorage.getItem("uneseno");
     
        if(sTaJeUnEtO==="BINFOjeste")
        {
          alert("uneeeeto nes DIJALOG SHOW");
          const dialogRef = this.dialog.open(WrBasicInfoPopUpComponent);
          
          dialogRef.afterClosed().subscribe(() => {
            // Do stuff after the dialog has closed

              alert("zatvoren dijalog")
              let DaLiSeCuva= localStorage.getItem("cuva")

              if(DaLiSeCuva=='da')
              {
                console.log("CUVA BI, OSTANI")

              }else
              {
                console.log("ne cuva BI, IDI NA SL STR")
                localStorage.removeItem("uneseno"); //ODMAH I OBRISI DA NE OSTANE
                this.router.navigateByUrl('/home/workreq-new/workreq-multimedia');
              }
          });
        }
        else
        {
          alert("NEMA DIJALOGA")
          console.log("neMA BI, IDI NA SL STR")
          this.router.navigateByUrl('/home/workreq-new/workreq-multimedia');
        }
    }
  }
  Equ(){
    
    var path=location.pathname;
    //console.log("path:   "+path)
    if(path=="/home/workreq-new/workreq-equipment"){
      console.log("ista stranica EQ");
    }else{
      console.log("p-->EQ")
      var sTaJeUnEtO=localStorage.getItem("uneseno");
     
        if(sTaJeUnEtO==="BINFOjeste")
        {
          alert("uneeeeto nes DIJALOG SHOW");
          const dialogRef = this.dialog.open(WrBasicInfoPopUpComponent);
          
          dialogRef.afterClosed().subscribe(() => {
            // Do stuff after the dialog has closed

              alert("zatvoren dijalog")
              let DaLiSeCuva= localStorage.getItem("cuva")

              if(DaLiSeCuva=='da')
              {
                console.log("CUVA BI, OSTANI")

              }else
              {
                console.log("ne cuva BI, IDI NA SL STR")
                localStorage.removeItem("uneseno"); //ODMAH I OBRISI DA NE OSTANE
                this.router.navigateByUrl('/home/workreq-new/workreq-equipment');
              }
          });
        }
        else
        {
          alert("NEMA DIJALOGA")
          console.log("neMA BI, IDI NA SL STR")
          this.router.navigateByUrl('/home/workreq-new/workreq-equipment');
        }
    }
  }

  AddWorkRequest(){
    alert("KUTIJA")
      let obj;
      obj=localStorage.getItem("history-wr")
      if(obj==null){//ako nije ni usao u history da setuje,automatski
        var formObj=this.rememberForm.getRawValue()
            let serializedForm = JSON.stringify(formObj);
            console.log("---JSON....istory KAD NIJE USAO---")
            console.log(serializedForm);
            localStorage.setItem("history-wr",serializedForm);
    //});
      }
      //OPET PREUZIMA
      obj=localStorage.getItem("history-wr")
      let fff=JSON.parse(obj);
      console.log(fff.datum);

      var basicinfoJSON=localStorage.getItem("basic-info");
      let basininfoObj=JSON.parse(basicinfoJSON as string);
      alert(basicinfoJSON);
      alert(basininfoObj)
      //alert(basininfoObj['docType'])
      console.log(basininfoObj)
    this.servis.SetHistory(localStorage.getItem('history-wr')).subscribe(data=>{})


    this.servis.AddBasicInfo(basininfoObj).subscribe((data:any) =>{

      if(data.succeeded){
        //alert("Uspesno dodat tim!  da li ovo prikaze");  //ne udje, ali sa servera ispise
      }
      
     }, (err:HttpErrorResponse) => {
       console.log(err)
       
       let message= err.error.text;
      // alert(message);
 
      if(message==="Succeesfully added work request"){
       this.notifier.notify('default', message);
       localStorage.removeItem("uneseno");
       this.router.navigateByUrl('/home/work-requests');
      
     }
       
      
    })
    localStorage.removeItem("history-wr")
    localStorage.removeItem("id-wr")
    localStorage.removeItem("basic-info")
    localStorage.removeItem("device-wr")
  }
  /*AddBasicInfo(){
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
       localStorage.removeItem("uneseno");
       this.router.navigateByUrl('/home/work-requests');
      
     }
       
      
    })
  } */
}

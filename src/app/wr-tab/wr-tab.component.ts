import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { MessagePassingService } from '../message-passing.service';
import { WorkReqServiceService } from '../work-req-service.service';
import { WrBasicInfoPopUpComponent } from '../wr-basic-info-pop-up/wr-basic-info-pop-up.component';

@Component({
  selector: 'app-wr-tab',
  templateUrl: './wr-tab.component.html',
  styleUrls: ['./wr-tab.component.css']
})
export class WrTabComponent implements OnInit {
  private readonly notifier!: NotifierService;
  constructor(private router: Router,public dialog: MatDialog, private service: MessagePassingService, private servis:WorkReqServiceService,notifierService: NotifierService) { 
    this.service.changeData("WORK REQUEST - UPDATE")
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    localStorage.removeItem('history-wr')
    localStorage.removeItem('history-wr-edited')
    localStorage.removeItem("istorija")
    localStorage.removeItem("basic-info-edit")
    localStorage.removeItem("obrisati-slike")
    //kad se nije dirao b info
    this.FirstValuesOfDoc()
    
  }

  UpdateWorkRequest(){
    let idwr,istorija;
    idwr=localStorage.getItem("wr-id")
    istorija=localStorage.getItem("istorija")
//-----------------------------------------
    var basicinfoJSON
    basicinfoJSON=localStorage.getItem("basic-info-edit");
    let basininfoObj
    if(basicinfoJSON!=null){
    basininfoObj=JSON.parse(basicinfoJSON as string);
    }else{
      //this.FirstValuesOfDoc()
      console.log('////////////////')
      basicinfoJSON=localStorage.getItem("info-start");
      console.log(basicinfoJSON)
      basininfoObj=JSON.parse(basicinfoJSON as string);
    }
    alert(basicinfoJSON);
    alert(basininfoObj)
    this.servis.UpdateBasicInfo(basininfoObj).subscribe((data:any) =>{

      if(data.succeeded){
        //alert("Uspesno dodat tim!  da li ovo prikaze");  //ne udje, ali sa servera ispise
      }
      
     }, (err:HttpErrorResponse) => {
       console.log(err)
       
       let message= err.error.text;
      // alert(message);
 
      if(message==="Succeesfully updated work request"){
       this.notifier.notify('default', message);
       localStorage.removeItem("uneseno");
      // this.router.navigateByUrl('/home/work-requests');
      
     }
    })

    let yesHistory=localStorage.getItem('istorija')
    if(yesHistory!=null)
    {
      this.servis.UpdateHistoryWorkRequest(istorija,idwr).subscribe(res=>{
        alert(res)
      })
    }else{
      alert('NEMA ISTORIJE ZA MENJANJE')
    }
    //obrisati slike
    let obrisati;
    obrisati=localStorage.getItem("obrisati-slike"/*,JSON.stringify(this.obrisati)*/);
    if(obrisati!=null){
      //jedino tad poziva
      this.servis.RemoveMedia(obrisati).subscribe(res=>{

      }, (err:HttpErrorResponse) => {
        console.log(err)
        
        let message= err.error.text;
       // alert(message);
  
       if(message==="Media saved"){
        this.notifier.notify('default', message);
        //localStorage.removeItem("uneseno");
        this.router.navigateByUrl('/home/work-requests');
       
      }
    })

    }else{
      this.router.navigateByUrl('/home/work-requests');
    }
  }
  Info(){
    var path=location.pathname;
    
    if(path=="/home/workreq-update"){
      console.log("ista stranica B I");
    }else{
      console.log("p-->BI")
      this.router.navigateByUrl('/home/workreq-update');
    }   
    
  }
  History(){
    var path=location.pathname;
  
    if(path=="/home/workreq-update/work-r-history")
    {
      console.log("ista stranica HI");
    }else
    {
      console.log("p-->HI")
      var sTaJeUnEtO=localStorage.getItem("editovano");
     // alert(sTaJeUnEtO)
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
                localStorage.removeItem("editovano"); //ODMAH I OBRISI DA NE OSTANE
                this.router.navigateByUrl('/home/workreq-update/work-r-history');
              }
          });
        }
        else
        {
          alert("NEMA DIJALOGA")
          console.log("neMA BI, IDI NA SL STR")
          this.router.navigateByUrl('/home/workreq-update/work-r-history');
        }
    
    }
  }

  Media(){
    var path=location.pathname;
    
    if(path=="/home/workreq-update/work-r-multimedia"){
      console.log("ista stranica MEDIA");
    }else{
      console.log("p-->MED")
      var sTaJeUnEtO=localStorage.getItem("editovano");
     
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
                localStorage.removeItem("editovano"); //ODMAH I OBRISI DA NE OSTANE
                this.router.navigateByUrl("/home/workreq-update/work-r-multimedia");
              }
          });
        }
        else
        {
          alert("NEMA DIJALOGA")
          console.log("neMA BI, IDI NA SL STR")
          this.router.navigateByUrl("/home/workreq-update/work-r-multimedia");
        }
    }
  }
  Equ(){
    
  }

  FirstValuesOfDoc(){
    let id;
    var reyyy;
    id=localStorage.getItem('wr-id')
    this.servis.GetOneWorkRequest(id).subscribe(res=>{
      console.log('rez')
      console.log(res)
      console.log(res['id'])
      localStorage.setItem("info-start",JSON.stringify(res));
      reyyy= res;
      })

      //return reyyy
  }
}

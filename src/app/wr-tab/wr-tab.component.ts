import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MessagePassingService } from '../message-passing.service';
import { WorkReqServiceService } from '../work-req-service.service';
import { WrBasicInfoPopUpComponent } from '../wr-basic-info-pop-up/wr-basic-info-pop-up.component';

@Component({
  selector: 'app-wr-tab',
  templateUrl: './wr-tab.component.html',
  styleUrls: ['./wr-tab.component.css']
})
export class WrTabComponent implements OnInit {

  constructor(private router: Router,public dialog: MatDialog, private service: MessagePassingService, private servis:WorkReqServiceService) { 
    this.service.changeData("WORK REQUEST - UPDATE")
  }

  ngOnInit(): void {
    localStorage.removeItem('history-wr')
    localStorage.removeItem('history-wr-edited')
    localStorage.removeItem("istorija")
  }

  UpdateWorkRequest(){
    let idwr,istorija;
    idwr=localStorage.getItem("wr-id")
    istorija=localStorage.getItem("istorija")
    this.servis.UpdateHistoryWorkRequest(istorija,idwr).subscribe(res=>{
      alert(res)
    })
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
      alert(sTaJeUnEtO)
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
}

import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { prepareEventListenerParameters } from '@angular/compiler/src/render3/view/template';
import { WrBasicInfoPopUpComponent } from '../wr-basic-info-pop-up/wr-basic-info-pop-up.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-workreq-new',
  templateUrl: './workreq-new.component.html',
  styleUrls: ['./workreq-new.component.css'],
  //styles: ['.router-link-active { background-color: red; }']
})
export class WorkreqNewComponent implements OnInit {

  constructor(public location: Location,private router: Router, public dialog: MatDialog) { 
    
      //console.log(location.path());
      //RUTA
      this.router.events.subscribe((event) => {
     /* if(event instanceof NavigationStart) {
        console.log("START info"+event)
      }else if (event instanceof NavigationEnd){
        //if(event.url==location.path()){
          //alert("prelazak")
        //}
      console.log("ennnnd"+event)
      }*/

      
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    });
  }

  ngOnInit(): void {

  }
  /*
  isActive(instruction: any[]): boolean {
    return this.router.isRouteActive(this.router.generate(instruction));
  }*/
  Info(){
    //alert("b i")
    
    var path=location.pathname;
    //console.log("path:   "+path)
    if(path=="/home/workreq-new"){
      console.log("ista stranica B I");
    }else{
      console.log("p-->BI")
      this.router.navigateByUrl('/home/workreq-new');
    }
  }
  History(){
    //alert("h")
    var path=location.pathname;
    //console.log("path:   "+path)
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
    //alert("m")
    var path=location.pathname;
    //console.log("path:   "+path)
    if(path=="/home/workreq-new/workreq-multimedia"){
      console.log("ista stranica MEDIA");
    }else{
      console.log("p-->MED")
    }
  }
  Equ(){
    //alert("e")
    var path=location.pathname;
    //console.log("path:   "+path)
    if(path=="/home/workreq-new/workreq-equipment"){
      console.log("ista stranica EQ");
    }else{
      console.log("p-->EQ")
    }
  }
}

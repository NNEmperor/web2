import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HistoryWrPoUpComponent } from '../history-wr-po-up/history-wr-po-up.component';
import { MessagePassingService } from '../message-passing.service';
import { WorkReqServiceService } from '../work-req-service.service';


@Component({
  selector: 'app-wr-tab-history',
  templateUrl: './wr-tab-history.component.html',
  styleUrls: ['./wr-tab-history.component.css']
})
export class WrTabHistoryComponent implements OnInit {

  selectedValue3=1;
  stanja = this.getStates();
  historyForm:any;
  istorija=[] as any;
  rememberForm:any;
  whatstate=false;
  constructor(private service: MessagePassingService, private fb: FormBuilder, public dialog: MatDialog, private servis:WorkReqServiceService) { 
    this.service.changeData("WORK REQUEST - UPDATE - History of state changes")

    this.historyForm=this.fb.group({

      state:['4']
      
    });

    this.rememberForm=this.fb.group({ //STA CE PITI PODATAK HISTORYJA

      userName:[localStorage.getItem("userName")],
      datum:[new Date().toISOString().split('T')[0]],
      state:['']
      
    });
  
  }
 

  ngOnInit(): void {
    let id;

   //localStorage.removeItem('history-wr')   //DODATO, OBRISATI POSLE PROVERA
   //localStorage.removeItem('istorija')
   let hh=localStorage.getItem('istorija')  //nju slati na back
   if(hh!=null){
     this.istorija=JSON.parse(hh)
   }else{
    //alert(this.istorija)
    //console.log(this.istorija)
    id=localStorage.getItem('wr-id')
    this.servis.GetHistoryWorkRequest(id).subscribe(res=>
      {
        console.log(res)
        this.istorija=res;
        console.log(this.istorija)//dateHistory historyState userName
        console.log(this.istorija[0]['dateHistory'])
        console.log(this.istorija[0].dateHistory)
      })
    }//zatvara onaj if ??
    let obb;
    obb=localStorage.getItem("history-wr-edited");
    if(obb==null){
      //alert('oooovo')
      
      this.rememberForm.controls['state'].setValue(localStorage.getItem("prvo-stanje"))
      //********** */
    var formObj=this.rememberForm.getRawValue()
            let serializedForm = JSON.stringify(formObj);
            console.log("JSON....istory")
            console.log(serializedForm);
            localStorage.setItem("history-wr",serializedForm);
    }else{
      //vec je odabrano
      //prikazati te podatke
      //alert("oovdeQQ"+obb)
      let hhh=JSON.parse(obb)
      this.rememberForm.controls['state'].setValue(hhh.state)
      this.historyForm.controls['state'].setValue(hhh.state)
      this.rememberForm.controls['datum'].setValue(hhh.datum)
      this.rememberForm.controls['userName'].setValue(hhh.userName)
      if(hhh.state==1 || hhh.state==3){
        this.whatstate=true; //NE MOZE MENJATI
       // alert('NE MOZE')
       }
    }
  }
  getStates(){
    return [
      { id: '1', name: 'Approve' },
      //{ id: '2', name: 'Deny' },
      { id: '3', name: 'Cancel' }
    ];
  }

  Dijalog(event: any)
  {
    const dialogRef = this.dialog.open(HistoryWrPoUpComponent)
      //update the ui
      let selektovano = event.target.value;
      console.log(selektovano);

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
            console.log("Result is TRUE!");
            this.historyForm.controls['state'].setValue(selektovano);

            
      
            console.log(this.historyForm.value.state)
            if(this.historyForm.value.state==1 || this.historyForm.value.state==3){
              this.whatstate=true; //NE MOZE MENJATI
           
             }
             let tempForm=this.fb.group({ //STA CE PITI NOVI PODATAK HISTORYJA

              userName:[localStorage.getItem("userName")],
              datum:[new Date().toISOString().split('T')[0]],
              state:[selektovano]
             
              
            });
           // this.istorija.push(tempForm)

           this.istorija.push({id:0,userName:localStorage.getItem("userName"),dateHistory:new Date().toISOString().split('T')[0],historyState:selektovano,workRequestId:localStorage.getItem('wr-id')})
            console.log("sa dodatim")
            console.log(this.istorija)
        }
        //----------
        let state=this.historyForm.value.state
      
        this.historyForm.controls['state'].setValue(state);
        console.log(this.historyForm.value.state)
       
        this.rememberForm.controls['state'].setValue(this.historyForm.value.state);
  
        var formObj=this.rememberForm.getRawValue()
            let serializedForm = JSON.stringify(formObj);
            //console.log("JSON....istory")
            console.log("saaaavu:"+serializedForm);
            localStorage.setItem("history-wr-edited",serializedForm);

            var jjjISTORIJA=JSON.stringify(this.istorija)
            alert(jjjISTORIJA)
            localStorage.setItem("istorija",jjjISTORIJA)
    });    
//-------------------------------- 
  }

}

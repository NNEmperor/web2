import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HistoryWrPoUpComponent } from '../history-wr-po-up/history-wr-po-up.component';
import { MessagePassingService } from '../message-passing.service';

@Component({
  selector: 'app-workreq-history',
  templateUrl: './workreq-history.component.html',
  styleUrls: ['./workreq-history.component.css']
})
export class WorkreqHistoryComponent implements OnInit {
  selectedValue3=1;
  stanja = this.getStates();
  historyForm:any;
  rememberForm:any;
  whatstate=false;
  constructor(private service: MessagePassingService, private fb: FormBuilder, public dialog: MatDialog) { 
    this.service.changeData("WORK REQUEST - NEW - History of state changes")

    this.historyForm=this.fb.group({

      state:['4']
      
    });

    this.rememberForm=this.fb.group({ //STA CE PITI PODATAK HISTORYJA

      userName:[localStorage.getItem("userName")],
      datum:[new Date().toISOString().split('T')[0]],
      state:['4']
      
    });
  }


  ngOnInit(): void {
    let obb;
    obb=localStorage.getItem("history-wr");
    if(obb==null){
    var formObj=this.rememberForm.getRawValue()
            let serializedForm = JSON.stringify(formObj);
            console.log("JSON....istory")
            console.log(serializedForm);
            localStorage.setItem("history-wr",serializedForm);
    }else{
      //vec je odabrano
      //prikazati te podatke
     // alert("oovde")
      let hhh=JSON.parse(obb)
      this.rememberForm.controls['state'].setValue(hhh.state)
      this.historyForm.controls['state'].setValue(hhh.state)
      this.rememberForm.controls['datum'].setValue(hhh.datum)
      this.rememberForm.controls['userName'].setValue(hhh.userName)
      if(this.rememberForm.value.state==1 || this.rememberForm.value.state==3){
        this.whatstate=true; //NE MOZE MENJATI
     
       }
    }
  }
  getStates(){
    return [
      { id: '1', name: 'Approve' },
      { id: '2', name: 'Deny' },
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
        }
        //----------
        let state=this.historyForm.value.state
      
        this.historyForm.controls['state'].setValue(state);
        console.log(this.historyForm.value.state)
       
        this.rememberForm.controls['state'].setValue(this.historyForm.value.state);
  
        var formObj=this.rememberForm.getRawValue()
            let serializedForm = JSON.stringify(formObj);
            console.log("JSON....istory")
            console.log(serializedForm);
            localStorage.setItem("history-wr",serializedForm);
    });    
//-------------------------------- 
  }
}

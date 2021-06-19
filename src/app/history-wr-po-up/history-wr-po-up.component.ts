import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-history-wr-po-up',
  templateUrl: './history-wr-po-up.component.html',
  styleUrls: ['./history-wr-po-up.component.css']
})
export class HistoryWrPoUpComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<HistoryWrPoUpComponent>) { }

  ngOnInit(): void {
  }

  Save(){
    //tj whatstate ce promeniti stanje
    let dataYouWantToReturn = true; //set data.

    this.dialogRef.close(dataYouWantToReturn); 

  }

  DontSave(){
    //whatstate ne menja stanje
   let dataYouWantToReturn = false; //set data.

    this.dialogRef.close(dataYouWantToReturn); 

  }

}

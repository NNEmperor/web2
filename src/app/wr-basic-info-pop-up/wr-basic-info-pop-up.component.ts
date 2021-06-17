import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-wr-basic-info-pop-up',
  templateUrl: './wr-basic-info-pop-up.component.html',
  styleUrls: ['./wr-basic-info-pop-up.component.css']
})
export class WrBasicInfoPopUpComponent implements OnInit {
  private readonly notifier!: NotifierService;
  constructor(public dialogRef: MatDialogRef<WrBasicInfoPopUpComponent>,notifierService: NotifierService) { 
    this.notifier = notifierService;
  }

  ngOnInit(): void {

    localStorage.setItem("trenutnaSTR","bi");
  }
  DontSave(){
   // alert("ne cuva se")
    localStorage.setItem("cuva","ne")
    this.dialogRef.close()
    this.notifier.notify('default', "You choose to leave the page");
  }

  Save(){
    
    //alert("cuva se")
    localStorage.setItem("cuva","da")
    this.dialogRef.close()
    this.notifier.notify('default', "You choose to not leave the page");
  }
}

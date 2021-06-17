import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-work-req-incident-pop-up',
  templateUrl: './work-req-incident-pop-up.component.html',
  styleUrls: ['./work-req-incident-pop-up.component.css']
})
export class WorkReqIncidentPopUpComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<WorkReqIncidentPopUpComponent>) { }

  ngOnInit(): void {

    //pozvati sve incidente iz baze
  }

}

import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-map-doc-pop-up',
  templateUrl: './map-doc-pop-up.component.html',
  styleUrls: ['./map-doc-pop-up.component.css']
})
export class MapDocPopUpComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MapDocPopUpComponent>) { }

  ngOnInit(): void {
    let naziv=localStorage.getItem('mapa');
    alert("NAZIV:  "+naziv);
    localStorage.removeItem('mapa');
  }

}

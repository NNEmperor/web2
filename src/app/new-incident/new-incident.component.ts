import { Component, OnInit, ViewChild } from '@angular/core';
import { MessagePassingService } from '../message-passing.service';


@Component({
  selector: 'app-new-incident',
  templateUrl: './new-incident.component.html',
  styleUrls: ['./new-incident.component.css']
})
export class NewIncidentComponent implements OnInit {
  
  constructor() {
   }

  ngOnInit(): void {
  }

}

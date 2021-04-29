import { Component, OnInit } from '@angular/core';
import { MessagePassingService } from '../message-passing.service';

@Component({
  selector: 'app-new-incident-crew',
  templateUrl: './new-incident-crew.component.html',
  styleUrls: ['./new-incident-crew.component.css']
})
export class NewIncidentCrewComponent implements OnInit {

  constructor(private service: MessagePassingService ) {
    this.service.changeData("INCIDENT - NEW")
   }

  ngOnInit(): void {
  }

}

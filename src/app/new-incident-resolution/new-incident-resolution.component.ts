import { Component, OnInit } from '@angular/core';
import { MessagePassingService } from '../message-passing.service';

@Component({
  selector: 'app-new-incident-resolution',
  templateUrl: './new-incident-resolution.component.html',
  styleUrls: ['./new-incident-resolution.component.css']
})
export class NewIncidentResolutionComponent implements OnInit {

  constructor(private service: MessagePassingService ) {
    this.service.changeData("INCIDENT - NEW")
   }

  ngOnInit(): void {
  }

}

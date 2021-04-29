import { Component, OnInit } from '@angular/core';
import { MessagePassingService } from '../message-passing.service';

@Component({
  selector: 'app-new-incident-new-calls',
  templateUrl: './new-incident-new-calls.component.html',
  styleUrls: ['./new-incident-new-calls.component.css']
})
export class NewIncidentNewCallsComponent implements OnInit {
  
  constructor(private service: MessagePassingService ) {
    this.service.changeData("CALLS - NEW")
   }

  ngOnInit(): void {
  }
}

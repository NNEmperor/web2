import { Component, OnInit } from '@angular/core';

import {
  NgbCalendar,
  NgbDate,
  NgbDateStruct,
  NgbInputDatepickerConfig
} from '@ng-bootstrap/ng-bootstrap';
import { MessagePassingService } from '../message-passing.service';

@Component({
  selector: 'app-new-incident-basic-info',
  templateUrl: './new-incident-basic-info.component.html',
  styleUrls: ['./new-incident-basic-info.component.css'],
  providers: [NgbInputDatepickerConfig] // add config to the component providers
})
export class NewIncidentBasicInfoComponent implements OnInit {

  constructor(private service: MessagePassingService ) {
    this.service.changeData("INCIDENT - NEW")
   }

  ngOnInit(): void {
  }

}

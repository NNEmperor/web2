import { Component, OnInit } from '@angular/core';

import {
  NgbCalendar,
  NgbDate,
  NgbDateStruct,
  NgbInputDatepickerConfig
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-incident-basic-info',
  templateUrl: './new-incident-basic-info.component.html',
  styleUrls: ['./new-incident-basic-info.component.css'],
  providers: [NgbInputDatepickerConfig] // add config to the component providers
})
export class NewIncidentBasicInfoComponent implements OnInit {

  model1!: NgbDateStruct;
  model2!: NgbDateStruct;
  model3!: NgbDateStruct;
  model4!: NgbDateStruct;
  model5!: NgbDateStruct;


  constructor(config: NgbInputDatepickerConfig, calendar: NgbCalendar) {
    // customize default values of datepickers used by this component tree
    config.minDate = {year: 1900, month: 1, day: 1};
    config.maxDate = {year: 2099, month: 12, day: 31};

    // days that don't belong to current month are not visible
    config.outsideDays = 'hidden';

    // setting datepicker popup to close only on click outside
    config.autoClose = 'outside';
  }

  ngOnInit(): void {
  }

}

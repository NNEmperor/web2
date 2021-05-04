import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-work-plan-basic-info',
  templateUrl: './new-work-plan-basic-info.component.html',
  styleUrls: ['./new-work-plan-basic-info.component.css']
})
export class NewWorkPlanBasicInfoComponent implements OnInit {

  dateTimeNow: Date;

  constructor() {
    this.dateTimeNow = new Date();

  }

  ngOnInit(): void {
  }

}

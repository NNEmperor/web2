import { Component, OnInit } from '@angular/core';
import { MessagePassingService } from '../message-passing.service';

@Component({
  selector: 'app-workreq-history',
  templateUrl: './workreq-history.component.html',
  styleUrls: ['./workreq-history.component.css']
})
export class WorkreqHistoryComponent implements OnInit {

  constructor(private service: MessagePassingService) { 
    this.service.changeData("WORK REQUEST - NEW - History of state changes")
  }

  ngOnInit(): void {
  }

}

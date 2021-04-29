import { Component, OnInit } from '@angular/core';
import { MessagePassingService } from '../message-passing.service';

@Component({
  selector: 'app-new-safety-docs-history',
  templateUrl: './new-safety-docs-history.component.html',
  styleUrls: ['./new-safety-docs-history.component.css']
})
export class NewSafetyDocsHistoryComponent implements OnInit {

  constructor(private service: MessagePassingService ) {
    this.service.changeData("SAFETY DOCUMENTS - NEW")
   }
  ngOnInit(): void {
  }

}

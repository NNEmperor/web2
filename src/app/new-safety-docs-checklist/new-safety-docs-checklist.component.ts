import { Component, OnInit } from '@angular/core';
import { MessagePassingService } from '../message-passing.service';

@Component({
  selector: 'app-new-safety-docs-checklist',
  templateUrl: './new-safety-docs-checklist.component.html',
  styleUrls: ['./new-safety-docs-checklist.component.css']
})
export class NewSafetyDocsChecklistComponent implements OnInit {

  constructor(private service: MessagePassingService ) {
    this.service.changeData("SAFETY DOCUMENTS - NEW")
   }
  ngOnInit(): void {
  }

}

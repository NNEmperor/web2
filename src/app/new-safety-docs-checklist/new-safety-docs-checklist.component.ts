import { Component, OnInit, ViewChild } from '@angular/core';
import { MessagePassingService } from '../message-passing.service';

@Component({
  selector: 'app-new-safety-docs-checklist',
  templateUrl: './new-safety-docs-checklist.component.html',
  styleUrls: ['./new-safety-docs-checklist.component.css']
})
export class NewSafetyDocsChecklistComponent implements OnInit {

  @ViewChild("workOperationsCompleted") workOperationsCompleted;
  @ViewChild("tagsRemoved") tagsRemoved;
  @ViewChild("groundingRemoved") groundingRemoved;
  @ViewChild("readyForService") readyForService;

  constructor(private service: MessagePassingService ) {
    this.service.changeData("SAFETY DOCUMENTS - NEW")
   }
  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { MessagePassingService } from '../message-passing.service';

@Component({
  selector: 'app-new-safety-docs-basic-info',
  templateUrl: './new-safety-docs-basic-info.component.html',
  styleUrls: ['./new-safety-docs-basic-info.component.css']
})
export class NewSafetyDocsBasicInfoComponent implements OnInit {

  constructor(private service: MessagePassingService ) {
    this.service.changeData("SAFETY DOCUMENTS - NEW")
   }

  ngOnInit(): void {
  }

}

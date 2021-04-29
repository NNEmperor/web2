import { Component, OnInit } from '@angular/core';
import { MessagePassingService } from '../message-passing.service';

@Component({
  selector: 'app-new-safety-docs-multimedia',
  templateUrl: './new-safety-docs-multimedia.component.html',
  styleUrls: ['./new-safety-docs-multimedia.component.css']
})
export class NewSafetyDocsMultimediaComponent implements OnInit {

  constructor(private service: MessagePassingService ) {
    this.service.changeData("SAFETY DOCUMENTS - NEW")
   }

  ngOnInit(): void {
  }

}

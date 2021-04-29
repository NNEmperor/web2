import { Component, OnInit } from '@angular/core';
import { MessagePassingService } from '../message-passing.service';

@Component({
  selector: 'app-new-safety-docs-equipment',
  templateUrl: './new-safety-docs-equipment.component.html',
  styleUrls: ['./new-safety-docs-equipment.component.css']
})
export class NewSafetyDocsEquipmentComponent implements OnInit {

  constructor(private service: MessagePassingService ) {
    this.service.changeData("SAFETY DOCUMENTS - NEW")
   }
  ngOnInit(): void {
  }

}

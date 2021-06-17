import { Component, OnInit } from '@angular/core';
import { MessagePassingService } from '../message-passing.service';

@Component({
  selector: 'app-workreq-equipment',
  templateUrl: './workreq-equipment.component.html',
  styleUrls: ['./workreq-equipment.component.css']
})
export class WorkreqEquipmentComponent implements OnInit {

  constructor(private service: MessagePassingService) { 
    this.service.changeData("WORK REQUEST - NEW - Equipment")
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MessagePassingService } from '../message-passing.service';

@Component({
  selector: 'app-new-equipment',
  templateUrl: './new-equipment.component.html',
  styleUrls: ['./new-equipment.component.css']
})
export class NewEquipmentComponent implements OnInit {

  newEquipmentForm!: FormGroup;

  constructor(private service: MessagePassingService, private fb: FormBuilder){
    this.service.changeData("DEVICE - NEW")

    this.newEquipmentForm=this.fb.group({
      address:['',[Validators.required, Validators.pattern("[a-zA-Z0-9 ]*")]]
    });

    
  }
  ngOnInit(): void {
  }

}

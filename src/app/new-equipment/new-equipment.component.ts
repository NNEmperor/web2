import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MessagePassingService } from '../message-passing.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { MapPopUpComponent } from '../map-pop-up/map-pop-up.component';
import { View } from 'ol';
import { DeviceBack } from '../models/device-back';


@Component({
  selector: 'app-new-equipment',
  templateUrl: './new-equipment.component.html',
  styleUrls: ['./new-equipment.component.css']
})
export class NewEquipmentComponent implements OnInit {

  @ViewChild("name") name;
  @ViewChild("address") address;
  @ViewChild("equipmentType") equipmentType;

  data: DeviceBack = new DeviceBack();

  newEquipmentForm!: FormGroup;

  constructor(public dialog: MatDialog, private service: MessagePassingService, private fb: FormBuilder){
    this.service.changeData("DEVICE - NEW")

    this.newEquipmentForm=this.fb.group({
      address:['',[Validators.required, Validators.pattern("[a-zA-Z0-9 ]*")]]
    });

    
  }
  ngOnInit(): void {
  }

  openDialog(){
    let dialogRef = this.dialog.open(MapPopUpComponent);

    dialogRef.afterClosed().subscribe(result =>{
      alert(result[0] +  ' + ' +  result[1])
      this.data.XCoordinate = result[0]
      this.data.YCoordinate = result[1]
    })
  }

  onAdd(){
    this.data.Address = this.address.nativeElement.value;
    this.data.Name = this.name.nativeElement.value;
    this.data.Type = this.equipmentType.nativeElement.value;

    this.service.addDevice(this.data).subscribe(data =>{
      alert('desilo se')
    }) 
  }


}

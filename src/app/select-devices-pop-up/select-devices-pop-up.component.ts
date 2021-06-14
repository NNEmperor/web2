import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { IncidentPassingService } from '../incident-passing.service';
import { DeviceBack } from '../models/device-back';

@Component({
  selector: 'app-select-devices-pop-up',
  templateUrl: './select-devices-pop-up.component.html',
  styleUrls: ['./select-devices-pop-up.component.css']
})
export class SelectDevicesPopUpComponent implements OnInit {

  selectedDevice?: any
  devices: DeviceBack[] = [];
  
  constructor(private incidentService: IncidentPassingService) { }

  ngOnInit(): void {
    this.incidentService.getAllDevices().subscribe(res =>{
      this.devices = res as DeviceBack[];
    })
  }

  onSelect(device: any): void{
    this.selectedDevice = device;
  }

}


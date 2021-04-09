import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-new-incident',
  templateUrl: './new-incident.component.html',
  styleUrls: ['./new-incident.component.css']
})
export class NewIncidentComponent implements OnInit {

  public showBasicInfo: boolean = true;
  public showDevices: boolean = false;
  public showResolution: boolean = false;
  public showCalls: boolean = false;
  public showNewCalls: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  basicInfoClick(){
    this.showBasicInfo = true;
    this.showDevices = false;
    this.showResolution = false;
    this.showCalls = false;
  }

  devicesClick(){
    this.showBasicInfo = false;
    this.showDevices = true;
    this.showResolution = false;
    this.showCalls = false;
  }

  resolutionClick(){
    this.showBasicInfo = false;
    this.showDevices = false;
    this.showResolution = true;
    this.showCalls = false;
  }

  callsClick(){
    this.showBasicInfo = false;
    this.showDevices = false;
    this.showResolution = false;
    this.showCalls = true;
  }
  




}

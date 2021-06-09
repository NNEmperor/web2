import { Component, OnInit, ViewChild } from '@angular/core';
import { MessagePassingService } from '../message-passing.service';
import { IncidentBasic } from '../models/incident-basic';
import { IncidentFinal } from '../models/incident-final';
import { IncidentResolution } from '../models/incident-resolution';


@Component({
  selector: 'app-new-incident',
  templateUrl: './new-incident.component.html',
  styleUrls: ['./new-incident.component.css']
})
export class NewIncidentComponent implements OnInit {
  
  basicInfoData: IncidentBasic = new IncidentBasic();
  resolutionData: IncidentResolution = new IncidentResolution();
  finalData: IncidentFinal = new IncidentFinal();

  constructor(private shared: MessagePassingService) {
   }

  ngOnInit(): void {
    this.shared.incidentBasic$.subscribe ( message => { this.basicInfoData = message; })
    this.shared.incidentResolution$.subscribe ( message => { this.resolutionData = message; })
  
  }

  finished(){
    this.finalData.Cause = this.resolutionData.Cause;
    this.finalData.SubCause = this.resolutionData.SubCause;
    this.finalData.Material = this.resolutionData.Material;
    this.finalData.TypeR = this.resolutionData.Type;
    
    this.finalData.Confirmed = this.basicInfoData.Confirmed;
    this.finalData.Id = this.basicInfoData.Id;
    this.finalData.Type = this.basicInfoData.Type;
    this.finalData.Priority = this.basicInfoData.Priority;
    this.finalData.Description = this.basicInfoData.Description;
    this.finalData.ETA = this.basicInfoData.ETA;
    this.finalData.ATA = this.basicInfoData.ATA;
    this.finalData.ETR = this.basicInfoData.ETR;
    this.finalData.Outage = this.basicInfoData.Outage;
    this.finalData.Estimated = this.basicInfoData.Estimated;
    this.finalData.NumCalls = this.basicInfoData.NumCalls;
    this.finalData.Status = this.basicInfoData.Status;
    this.finalData.Affected = this.basicInfoData.Affected;
    this.finalData.Voltage = this.basicInfoData.Voltage;

    this.shared.UploadIncident(this.finalData).subscribe( date =>
      {
        alert("desilo se");
    });



  }

}

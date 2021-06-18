import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MessagePassingService } from '../message-passing.service';
import { IncidentBasic } from '../models/incident-basic';

@Component({
  selector: 'app-new-incident-basic-info',
  templateUrl: './new-incident-basic-info.component.html',
  styleUrls: ['./new-incident-basic-info.component.css'],
  providers: [] // add config to the component providers
})
export class NewIncidentBasicInfoComponent implements AfterViewInit {

  c: boolean = false;

  @ViewChild("idIncident") idIncident;
  @ViewChild("prioIncident") prioIncident;
  @ViewChild("statusIncident") statusIncident;
  @ViewChild("affectedByIncident") affectedByIncident;
  @ViewChild("confirmedIncident") confirmedIncident;
  @ViewChild("ata") ata;
  @ViewChild("eta") eta;
  @ViewChild("etr") etr;
  @ViewChild("type") type;
  @ViewChild("outage") outage;
  @ViewChild("description") description;
  @ViewChild("calls") calls;
  @ViewChild("voltage") voltage;
  @ViewChild("scheduled") scheduled;

  basicInfoData: IncidentBasic = new IncidentBasic();

  basicInfoForm!: FormGroup;

  constructor(private fb: FormBuilder, private service: MessagePassingService) {
    this.service.changeData("INCIDENT - NEW")

    this.basicInfoForm = this.fb.group({
      type:['', Validators.required],
      description:['', Validators.required],
      eta:['', Validators.required],
      ata:['', Validators.required],
      outage:['', Validators.required],
      etr:['', Validators.required],
      calls:['', Validators.required],
      voltage:['', Validators.required],
      scheduled:['', Validators.required]
    })
  }

  check(event){
    if(this.c == true){
      this.c = false
    }
    else{
      this.c = true
    }
  }

  sendIncidentBasic(){

    this.basicInfoData.ATA = this.ata.nativeElement.value;
    this.basicInfoData.ETA = this.eta.nativeElement.value;
    this.basicInfoData.ETR = this.etr.nativeElement.value;
    this.basicInfoData.Outage = this.outage.nativeElement.value;
    this.basicInfoData.Id = this.idIncident.nativeElement.value;
    this.basicInfoData.Type = this.type.nativeElement.value;
    this.basicInfoData.Priority = this.prioIncident.nativeElement.value;
    this.basicInfoData.Confirmed = this.c
    this.basicInfoData.Description = this.description.nativeElement.value;
    this.basicInfoData.Affected = this.affectedByIncident.nativeElement.value;
    this.basicInfoData.NumCalls = this.calls.nativeElement.value;
    this.basicInfoData.Estimated = this.scheduled.nativeElement.value;
    this.basicInfoData.Status = this.statusIncident.nativeElement.value;
    this.basicInfoData.Voltage = this.voltage.nativeElement.value


    this.service.sendIncidentBasic(this.basicInfoData);
    console.log(this.basicInfoData)

  }

  ngAfterViewInit(): void {
    //generise random id
    this.idIncident.nativeElement.value = "1"
    //generise prioritet na osnovu lokacije
    this.prioIncident.nativeElement.value = "0"
    //automatski je draft
    this.statusIncident.nativeElement.value = "Draft"
    //automatski na osnovu izabranih uredjaja
    this.affectedByIncident.nativeElement.value = "0"

  }
  
}
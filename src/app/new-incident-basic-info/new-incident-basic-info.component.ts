import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MessagePassingService } from '../message-passing.service';

@Component({
  selector: 'app-new-incident-basic-info',
  templateUrl: './new-incident-basic-info.component.html',
  styleUrls: ['./new-incident-basic-info.component.css'],
  providers: [] // add config to the component providers
})
export class NewIncidentBasicInfoComponent implements AfterViewInit {

  @ViewChild("idIncident") idIncident;
  @ViewChild("prioIncident") prioIncident;
  @ViewChild("statusIncident") statusIncident;
  @ViewChild("affectedByIncident") affectedByIncident;

  basicInfoForm: FormGroup = new FormGroup({
    'type' : new FormControl('', Validators.required),
    'description': new FormControl('', Validators.required),
    'etaDate': new FormControl('', Validators.required),
    'etaTime': new FormControl('', Validators.required),
    'ataDate': new FormControl('', Validators.required),
    'ataTime': new FormControl('', Validators.required),
    'outageDate': new FormControl('', Validators.required),
    'outageTime': new FormControl('', Validators.required),
    'etrDate': new FormControl('', Validators.required),
    'etrTime': new FormControl('', Validators.required),
    'calls' : new FormControl('', Validators.required),
    'voltage' : new FormControl('', Validators.required),
    'scheduledDate': new FormControl('', Validators.required),
    'scheduledTime' : new FormControl('', Validators.required)
});

  constructor(private service: MessagePassingService) {
    this.service.changeData("INCIDENT - NEW")


  }
  
  ngAfterViewInit(): void {
    //generise random id
    this.idIncident.nativeElement.value = "sklj"
    //generise prioritet na osnovu lokacije
    this.prioIncident.nativeElement.value = "0"
    //automatski je draft
    this.statusIncident.nativeElement.value = "Draft"
    //automatski na osnovu izabranih uredjaja
    this.affectedByIncident = "0"

  }
}
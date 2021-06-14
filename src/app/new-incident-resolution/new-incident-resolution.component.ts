import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessagePassingService } from '../message-passing.service';
import { IncidentResolution } from '../models/incident-resolution';

@Component({
  selector: 'app-new-incident-resolution',
  templateUrl: './new-incident-resolution.component.html',
  styleUrls: ['./new-incident-resolution.component.css']
})
export class NewIncidentResolutionComponent implements OnInit {

  @ViewChild("cause") cause;
  @ViewChild("subcause") subcause;
  @ViewChild("type") type;
  @ViewChild("material") material;

  resolutionForm!: FormGroup;
  resolutionData: IncidentResolution = new IncidentResolution();

  constructor(private service: MessagePassingService, private fb: FormBuilder ) {
    this.service.changeData("INCIDENT - NEW")

    this.resolutionForm = this.fb.group({
      cause: ['', Validators.required],
      subcause: ['', Validators.required],
      type: ['', Validators.required],
      material: ['', Validators.required]

    })
   }

  ngOnInit(): void {
  }

  sendResolution(){
    this.resolutionData.Cause = this.cause.nativeElement.value;
    this.resolutionData.SubCause = this.subcause.nativeElement.value;
    this.resolutionData.Material = this.material.nativeElement.value;
    this.resolutionData.Type = this.type.nativeElement.value;

    this.service.sentIncidentResolution(this.resolutionData);
  }

}

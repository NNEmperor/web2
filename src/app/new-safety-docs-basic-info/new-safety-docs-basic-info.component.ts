import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessagePassingService } from '../message-passing.service';
import { DocBasic } from '../models/doc-basic';

@Component({
  selector: 'app-new-safety-docs-basic-info',
  templateUrl: './new-safety-docs-basic-info.component.html',
  styleUrls: ['./new-safety-docs-basic-info.component.css']
})
export class NewSafetyDocsBasicInfoComponent implements AfterViewInit {

  @ViewChild("status") status;
  @ViewChild("switchingPlan") switchingPlan;
  @ViewChild("created") created; //date
  @ViewChild("crew") crew;
  @ViewChild("type") type;
  @ViewChild("createdBy") createdBy;
  @ViewChild("phone") phone;
  @ViewChild("details") details;
  @ViewChild("notes") notes;

  basicInfoData: DocBasic = new DocBasic();
  basicInfoForm!: FormGroup;

  constructor(private fb: FormBuilder, private service: MessagePassingService ) {
    this.service.changeData("SAFETY DOCUMENTS - NEW")

    this.basicInfoForm = this.fb.group({
      type:['', Validators.required],
      createdDate: ['', Validators.required],
      phone: ['', Validators.required]

    })

   }

  ngAfterViewInit(): void {
    //automatski je draft
    this.status.nativeElement.value = "Draft"
    //s se na osnu plana rada ili je prazno ako ga nema
    this.switchingPlan.nativeElement.value = "1"
    //trenutni korisnik
    this.createdBy.nativeElement.value = localStorage.getItem("userName")
    //iz plana rada se uzima
    this.crew.nativeElement.value = "neka ekipa"
  }

  sendBasic(){
    this.basicInfoData.Created = this.created.nativeElement.value;
    this.basicInfoData.CreatedBy = this.createdBy.nativeElement.value;
    this.basicInfoData.Crew = this.crew.nativeElement.value;
    this.basicInfoData.Details = this.details.nativeElement.value;
    this.basicInfoData.Notes = this.notes.nativeElement.value;
    this.basicInfoData.Phone = this.phone.nativeElement.value;
    this.basicInfoData.Status = this.status.nativeElement.value;
    this.basicInfoData.SwitchingPlan = this.switchingPlan.nativeElement.value;
    this.basicInfoData.Type = this.type.nativeElement.value;

    this.service.sendDocsBasic(this.basicInfoData);
    console.log(this.basicInfoData)
  }


}

import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { View } from 'ol';
import { MessagePassingService } from '../message-passing.service';

@Component({
  selector: 'app-new-safety-docs-basic-info',
  templateUrl: './new-safety-docs-basic-info.component.html',
  styleUrls: ['./new-safety-docs-basic-info.component.css']
})
export class NewSafetyDocsBasicInfoComponent implements AfterViewInit {

  @ViewChild("statusSafetyDoc") statusSafetyDoc;
  @ViewChild("switchingPlan") switchingPlan;
  @ViewChild("createdBy") createdBy;
  @ViewChild("crew") crew;



  constructor(private service: MessagePassingService ) {
    this.service.changeData("SAFETY DOCUMENTS - NEW")
   }

  ngAfterViewInit(): void {
    //automatski je draft
    this.statusSafetyDoc.nativeElement.value = "Draft"
    //popunjava se na osnu plana rada ili je prazno ako ga nema
    this.switchingPlan.nativeElement.value = "sklj"
    //trenutni korisnik
    this.createdBy.nativeElement.value = "sklj"
    //iz plana rada se uzima
    this.crew.nativeElement.value = "neka ekipa"
  }

   basicInfoForm: FormGroup = new FormGroup({
    'type' : new FormControl('', Validators.required),
    'docType' : new FormControl('', Validators.required),
    'createdDate': new FormControl('', Validators.required),
    'createdTime' : new FormControl('', Validators.required),
    'phone' : new FormControl('', Validators.required)
  
  });
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { MessagePassingService } from '../message-passing.service';
import { DocChecklist } from '../models/doc-checklist';

@Component({
  selector: 'app-new-safety-docs-checklist',
  templateUrl: './new-safety-docs-checklist.component.html',
  styleUrls: ['./new-safety-docs-checklist.component.css']
})
export class NewSafetyDocsChecklistComponent implements OnInit {

  checklist: DocChecklist = new DocChecklist();

  w: boolean = false;
  t: boolean = false;
  r: boolean = false;
  g: boolean = false;;

  constructor(private service: MessagePassingService ) {
    this.service.changeData("SAFETY DOCUMENTS - NEW")
   }
  ngOnInit(): void {
  }

  checkW(event){
    if(this.w == true){
      this.w = false
    }
    else{
      this.w = true
    }
  }
  checkT(event){
    if(this.t == true){
      this.t = false
    }
    else{
      this.t = true
    }
  }
  checkG(event){
    if(this.g == true){
      this.g = false
    }
    else{
      this.g = true
    }
  }
  checkR(event){
    if(this.r == true){
      this.r = false
    }
    else{
      this.r = true
    }
  }

  send(){
    this.checklist.GroundingRemoved = this.g
    this.checklist.TagsRemoved = this.t
    this.checklist.WorkOpCompleted = this.w
    this.checklist.ReadyForService = this.r
  
    this.service.sendDocsChecklist(this.checklist);
    console.log(this.checklist)
  }

}

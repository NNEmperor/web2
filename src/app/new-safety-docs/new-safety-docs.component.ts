import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { MessagePassingService } from '../message-passing.service';
import { DocBasic } from '../models/doc-basic';
import { DocChecklist } from '../models/doc-checklist';

@Component({
  selector: 'app-new-safety-docs',
  templateUrl: './new-safety-docs.component.html',
  styleUrls: ['./new-safety-docs.component.css']
})
export class NewSafetyDocsComponent implements OnInit {

  basicInfoData: DocBasic = new DocBasic();
  checklistData: DocChecklist = new DocChecklist();
  deviceData: any[] = [];
  historyData: any[] = [];

  constructor(private shared: MessagePassingService) { }

  ngOnInit(): void {
    this.shared.docsBasic$.subscribe (message => { this.basicInfoData = message; })
    this.shared.docsChecklsit$.subscribe (message => { this.checklistData = message; })
    this.shared.docsDevices$.subscribe ( message => { this.deviceData = message; })
    this.shared.docsHistory$.subscribe( message => {this.historyData = message; })
  }

  finished(){
    
    var send = {
      Type: this.basicInfoData.Type,
      Status: this.basicInfoData.Status,
      CreatedBy: localStorage.getItem("userName"),
      WorkPlan: this.basicInfoData.SwitchingPlan,
      Notes: this.basicInfoData.Notes,
      Team: this.basicInfoData.Crew,
      Details: this.basicInfoData.Details,
      Phone: this.basicInfoData.Phone,
      CreatedWhen: this.basicInfoData.Created,
      WorkOpCompleted: this.checklistData.WorkOpCompleted,
      TagsRemoved: this.checklistData.TagsRemoved,
      GroundingRemoved: this.checklistData.GroundingRemoved,
      ReadyForService: this.checklistData.ReadyForService,
      Devices: this.deviceData,
      History: this.historyData
    }

    this.shared.uploadDoc(send).subscribe(res => {
      
    })

    console.log(send)
  }

}

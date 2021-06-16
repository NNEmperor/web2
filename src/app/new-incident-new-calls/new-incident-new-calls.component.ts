import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MessagePassingService } from '../message-passing.service';
import { CallBack } from '../models/call-back';
import { SelectUserPopUpComponent } from '../select-user-pop-up/select-user-pop-up.component';

@Component({
  selector: 'app-new-incident-new-calls',
  templateUrl: './new-incident-new-calls.component.html',
  styleUrls: ['./new-incident-new-calls.component.css']
})
export class NewIncidentNewCallsComponent implements OnInit {
  
  call: CallBack = new CallBack();

  @ViewChild("name") name;
  @ViewChild("address") address;
  @ViewChild("lastName") lastName;
  @ViewChild("userName") userName;
  @ViewChild("comment") comment;
  @ViewChild("hazard") hazard;
  @ViewChild("reason") reason;

  data: any[] = [];

  constructor(public dialog: MatDialog, private service: MessagePassingService ) {
    this.service.changeData("CALLS - NEW")
   }

  ngOnInit(): void {
  }

  openDialog(){
    let dialogRef = this.dialog.open(SelectUserPopUpComponent);

    dialogRef.afterClosed().subscribe(res => {
      this.name.nativeElement.value = res.Name;
      this.address.nativeElement.value = res.Address;
      this.lastName.nativeElement.value = res.LastName;
      this.userName.nativeElement.value = res.UserName;
    })
  }

  addCall(){
    this.call.Name = this.name.nativeElement.value;
    this.call.LastName = this.lastName.nativeElement.value
    this.call.Address = this.address.nativeElement.value
    this.call.UserName = this.userName.nativeElement.value
    this.call.Comment = this.comment.nativeElement.value
    this.call.Hazard = this.hazard.nativeElement.value
    this.call.Reason = this.reason.nativeElement.value

    this.service.addCall(this.call).subscribe(res => {
      this.service.sendNewCall(this.call);
    });

  }
}

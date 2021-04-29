import { Component, OnInit } from '@angular/core';
import { MessagePassingService } from '../message-passing.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(private service: MessagePassingService ) {
    this.service.changeData("EDIT PROFILE")
   }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { MessagePassingService } from '../message-passing.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  user: UserElement;

  constructor(private service: MessagePassingService ) {
    this.service.changeData("MY PROFILE")
    this.user = { username: 'lana', email: 'lana@gmail.com', name: 'Lana', lastname: 'Nm', role: 'dispatcher'};
  }

  ngOnInit(): void {
  }

  logOut(){
    console.log("you're logged out")
    
  }
}

export interface UserElement {
  username: string;
  email: string;
  name: string;
  lastname:string;
  role:string;
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  user: UserElement;
  parentMessage = "My profile";

  constructor() {
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

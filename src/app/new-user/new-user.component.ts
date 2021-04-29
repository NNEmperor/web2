import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessagePassingService } from '../message-passing.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  newUserForm!: FormGroup;

  constructor(private service: MessagePassingService, private fb: FormBuilder) {
    this.service.changeData("NEW USER")

    this.newUserForm=this.fb.group({

      inputName:['',[Validators.required,Validators.minLength(1)]],
      inputLastName:['',[Validators.required,Validators.minLength(1)]],
      passwordCheck:['',[Validators.required]],



    });
  }

  ngOnInit(): void {
  }

  addUser(){
    console.log('dodat user')
  }
}

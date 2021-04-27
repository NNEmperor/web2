import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  parentMessage = "New User";
  newUserForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    
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

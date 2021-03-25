import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.css']
})
export class StartScreenComponent implements OnInit {

  //trazi mi definite assignment ????
  loginForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(){
    this.loginForm = new FormGroup({
      'userName' : new FormControl(),
      'password': new FormControl(Validators.required)
    });
  }

  onSubmit(){
    //provera jel postoji u nekoj bazi podataka
  }

  onClear(){
    this.loginForm.reset();
  }

}

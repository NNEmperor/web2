import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.css']
})
export class StartScreenComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
      'userName' : new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', Validators.required)
  });

  constructor() { }
  
  ngOnInit(): void {
    
  }

  //get userName() {return this.loginForm.get('userName');}
  //get password() {return this.loginForm.get('password');}

  onSubmit(){
    //provera jel postoji u nekoj bazi podataka
  }

  onClear(){
    this.loginForm.reset();
  }

}

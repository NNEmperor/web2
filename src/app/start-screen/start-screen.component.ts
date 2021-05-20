import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { SocialAuthService, GoogleLoginProvider, SocialUser,FacebookLoginProvider } from 'angularx-social-login';
import { FormBuilder } from '@angular/forms';

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

  user!: SocialUser;
  isSignedin!: boolean;  //za drustvene mreze

  constructor(private socialAuthService: SocialAuthService) { }
  
  ngOnInit(): void {
    
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.isSignedin = (user != null);
      console.log(this.user);
    });
  }

  googleSignin(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  logout(): void {
    this.socialAuthService.signOut();
  }
/*
//da li treba
  refreshToken(): void {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }*/

  //get userName() {return this.loginForm.get('userName');}
  //get password() {return this.loginForm.get('password');}

  onSubmit(){
    //provera jel postoji u nekoj bazi podataka
  }

  onClear(){
    this.loginForm.reset();
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

import { SocialAuthService, GoogleLoginProvider, SocialUser,FacebookLoginProvider } from 'angularx-social-login';
import { FormBuilder } from '@angular/forms';
import { FormUploadService } from '../form-upload.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.css']
})
export class StartScreenComponent implements OnInit {

  formModel = {
    UserName: '',
    Password: ''
  }

  loginForm: any;

  user!: SocialUser;
  isSignedin!: boolean;  //za drustvene mreze;

  constructor(private fb: FormBuilder, private socialAuthService: SocialAuthService, private router: Router,
     private service: FormUploadService) {

      this.loginForm = fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
      })

    }
  
  ngOnInit(): void {
    localStorage.removeItem('jwt');
    localStorage.removeItem("userName");
    localStorage.removeItem("user");

    
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.isSignedin = (user != null);
      console.log(this.user);


    });

    //if(localStorage.getItem('token') != null)
     // this.router.navigateByUrl('/home');
  }

  googleSignin(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  logout(): void {
    //this.socialAuthService.signOut();
    //if(this.user!=null)
    {
    this.service.exLogin(this.user.lastName,this.user.firstName,this.user.provider as string,this.user.email as string).subscribe((res:any)=>{
      console.log(res)
      console.log(res.jsonString)
      let obj = JSON.parse(res.jsonString)

      console.log(obj)
      //alert(obj.UserName)
      localStorage.setItem('jwt', obj.Token);
        localStorage.setItem("userName", this.user.email/*this.loginForm.get("username").value*/)
        //localStorage.setItem('user', JSON.stringify(this.user))

      this.router.navigateByUrl('/home')
    })
  }
    //nastavi
  }
/*
//da li treba
  refreshToken(): void {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }*/

  //get userName() {return this.loginForm.get('userName');}
  //get password() {return this.loginForm.get('password');}

  onSubmit(){
    console.log("usao sam")
    this.service.login(this.loginForm.value).subscribe(
      (res: any) => {
        console.log(res.jsonString)
        let obj = JSON.parse(res.jsonString)
        console.log(obj)
        //alert(obj.UserName)
        localStorage.setItem('jwt', obj.Token);
        localStorage.setItem("userName", obj.UserName/*this.loginForm.get("username").value*/)
        localStorage.setItem('user', res.jsonString)
        console.log(localStorage.getItem("userName"))
        this.router.navigateByUrl('/home')
      },
      err => {
        if(err.status == 400){
          console.log(err + "404")
          console.log(err)
          alert("Email or password is incorrect.")
        }
        else{
          console.log(err);
          
        }
      }
    )
  }

  onClear(){

  }

}

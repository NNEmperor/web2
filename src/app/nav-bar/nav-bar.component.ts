import { Component, OnInit } from '@angular/core';
import { MessagePassingService } from '../message-passing.service';
import { NotifierService } from 'angular-notifier';
import { FormUploadService } from '../form-upload.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  childMessage! : string

  private readonly notifier!: NotifierService;

  constructor(private service: MessagePassingService, notifierService: NotifierService, private servis:FormUploadService){
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    this.service.data$.subscribe(res=> this.childMessage = res)
  }


  showStatus(){
    //alert("status")
    let user;
    user=localStorage.getItem("userName")
    alert(user)
    if(user!=null){
      this.servis.getStatus(user).subscribe(res=>{}, 
        (err:HttpErrorResponse) => {
        console.log(err)
        console.log(err.error.text)
        let message= err.error.text;
         // if(message==undefined){
           // message='You are logged in with social media.'
          //}
        this.notifier.notify('default', "Profile status:"+message);
      })
      
    }
}


}

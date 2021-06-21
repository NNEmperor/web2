import { Component, OnInit } from '@angular/core';
import { MessagePassingService } from '../message-passing.service';
import { HttpClient } from '@angular/common/http';
import { AdminoptionsService } from '../adminoptions.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-profiles-view',
  templateUrl: './profiles-view.component.html',
  styleUrls: ['./profiles-view.component.css']
})

export class ProfilesViewComponent implements OnInit {

  uloga='';
  private readonly notifier!: NotifierService;
  path="assets/images/user.png"
  users!: any;
  constructor(private service: MessagePassingService , private http: HttpClient, private adminOption:AdminoptionsService, notifierService: NotifierService) { 
    this.service.changeData("PROFILES")
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    var oo=localStorage.getItem("user")
    if(oo!=null){
    var ss=JSON.parse(oo)
    this.uloga=ss.UserRole
    //alert(this.uloga)
    }


    //this.users=ELEMENT_DATA;  //lista usera za prikaz
    this.adminOption.GetRegisteredUsers().subscribe( data =>
      {
        console.log("useri na procesiranju: ");
        console.log(data);
       // alert(data);
        this.users = data;
        if(this.users.length===0){
          this.notifier.notify('default', "No new registered users.");
           /* setTimeout(() => {
              //ukloni obavestenje
              this.notifier.hideAll();
            }, 2000);*/
        }
      });

     
  }
  AcceptUser(name:string){
    console.log("prihvacen "+name);
    this.adminOption.AcceptUser(name).subscribe( data =>
      {
        console.log("nnakon accepta:    "+data);
        //alert(data);
        this.users = data;
      });
      this.notifier.notify('default', "Successfully accepted user.");
      console.log("broj usera:  "+this.users.length)
      if(this.users.length-1==0){
        this.NoUserMessage();//this.notifier.notify('default', "No new registered users.");
      }
      /* setTimeout(() => {
         //ukloni obavestenje
         this.notifier.hideAll();
       }, 2000);*/
  }
  DenyUser(name:string){
    console.log("odbijen "+name);

    this.adminOption.DenyUser(name).subscribe( data =>
      {
        console.log("nnakon denyja:    "+data);
        //alert(data);
        this.users = data;
      });
      this.notifier.notify('default', "Successfully denyed user.");
      console.log("broj usera:  "+this.users.length)
      if(this.users.length-1==0){
        this.NoUserMessage();
        // this.notifier.notify('default', "No new registered users.");
      }
      /* setTimeout(() => {
         //ukloni obavestenje
         this.notifier.hideAll();
       }, 2000);*/
  }
 
    NoUserMessage(){
      this.notifier.notify('default', "No new registered users.");
    }
}
export interface User {
  name: string;
  lastname: string;
  image:string;
}
//obratiti paznju osveziti, urediti
const ELEMENT_DATA: User[] = [
  { name: 'tim1', lastname:'Prezime',image:'assets/images/user.png'},
  {   name: 'tim2', lastname:'prezime',image:'assets/images/user.png'},
  {  name: 'tim3',lastname:'prezime',image:'assets/images/user.png'},
  {   name: 'tim4',lastname:'prezime',image:'assets/images/prof.png'},
  {  name: 'tim5',lastname:'prezime',image:'assets/images/user.png'},
  {  name: 'tim6',lastname:'prezime',image:'assets/images/prof.png'},
  {  name: 'tim7', lastname:'prezime',image:'assets/images/user.png'},
  {   name: 'lucky4',lastname:'prezime',image:'assets/images/prof.png'},
  {  name: 'Shia team',lastname:'prezime',image:'assets/images/user.png'},
  {  name: 'Kane team', lastname:'prezime',image:'assets/images/user.png'}
];

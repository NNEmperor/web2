import { Component, OnInit } from '@angular/core';
import { MessagePassingService } from '../message-passing.service';
import { HttpClient } from '@angular/common/http';
import { AdminoptionsService } from '../adminoptions.service';

@Component({
  selector: 'app-profiles-view',
  templateUrl: './profiles-view.component.html',
  styleUrls: ['./profiles-view.component.css']
})

export class ProfilesViewComponent implements OnInit {

  path="assets/images/user.png"
  users!: any;
  constructor(private service: MessagePassingService , private http: HttpClient, private adminOption:AdminoptionsService) { 
    this.service.changeData("PROFILES")
  }

  ngOnInit(): void {
    //this.users=ELEMENT_DATA;  //lista usera za prikaz
    this.adminOption.GetRegisteredUsers().subscribe( data =>
      {
        console.log("useri na procesiranju: ");
        console.log(data);
       // alert(data);
        this.users = data;
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
  }
  DenyUser(name:string){
    console.log("odbijen "+name);

    this.adminOption.DenyUser(name).subscribe( data =>
      {
        console.log("nnakon denyja:    "+data);
        //alert(data);
        this.users = data;
      });
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

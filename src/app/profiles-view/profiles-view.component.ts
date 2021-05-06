import { Component, OnInit } from '@angular/core';
import { MessagePassingService } from '../message-passing.service';

@Component({
  selector: 'app-profiles-view',
  templateUrl: './profiles-view.component.html',
  styleUrls: ['./profiles-view.component.css']
})

export class ProfilesViewComponent implements OnInit {

  path="assets/images/user.png"
  users!: User[];
  constructor(private service: MessagePassingService ) { 
    this.service.changeData("PROFILES")
  }

  ngOnInit(): void {
    this.users=ELEMENT_DATA;  //lista usera za prikaz
  }
  AcceptUser(name:string){
    console.log("prihvacen "+name);
  }
  DenyUser(name:string){
    console.log("odbijen "+name);
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

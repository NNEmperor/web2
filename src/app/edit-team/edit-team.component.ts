import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessagePassingService } from '../message-passing.service';
import {DragDropModule,CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { AdminoptionsService } from '../adminoptions.service';
import {copyArrayItem} from '@angular/cdk/drag-drop';
import { HttpErrorResponse, HttpEventType, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {

  newTeamForm!: FormGroup;

  private readonly notifier!: NotifierService;

  teamId!:string;
  
  todo:any[]=[];
  
  done:any[]=[];
  constructor(private service: MessagePassingService, private fb: FormBuilder, private adminOption: AdminoptionsService,  private router: Router, notifierService: NotifierService) {
    this.service.changeData("EDIT TEAM")
    this.notifier = notifierService;
    this.newTeamForm=this.fb.group({
      //id ne bi trebao da se unosi,sam da se generise na serveru
      inputName:['',[Validators.required,Validators.minLength(3)]],
      inputID:['',[Validators.required,Validators.minLength(3)]],
    });
   }
   drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log("u drugi");
      console.log(event.container);
      transferArrayItem(
        
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  ngOnInit(): void {

    let idtima=localStorage.getItem('edit-team');
    console.log("odabran je "+idtima);
    this.newTeamForm.controls['inputID'].setValue(idtima);  //setovanje vec onog idja
    this.teamId=idtima as string;
    console.log(this.teamId);
this.adminOption.GetTeam(this.teamId).subscribe(data =>{
    console.log("useri na procesiranju: ");
    console.log(data);
    console.log("timm"+data);
    this.newTeamForm.controls['inputName'].setValue((data as TeamElement).teamName);
   // console.log(data[1]);
    //this.done=(data as TeamElement).members//data as any[];
    //console.log(this.todo);
  });

  this.adminOption.GetMembers(this.teamId).subscribe(data =>{
    console.log("clanovi tima: ");
    console.log(data);
    console.log("timm"+data);
   
    this.done=data as any[];

    console.log(this.done);
  });
  this.adminOption.GetFreeMembers(this.teamId).subscribe(data =>{
    console.log("clanovi tima: ");
    console.log(data);
    console.log("timm"+data);
   
    this.todo=data as any[];

    console.log(this.todo);
  });
/*
  this.adminOption.GetTeamID().subscribe(data=>{
    //nis
  }, (err:HttpErrorResponse) => {
    console.log(err)
    let message= err.error.text;
    console.log("ID "+message);
    this.newTeamForm.controls['inputID'].setValue(message);
  });*/
}

  updateTeam(){
    console.log('dodat team')
    const lista:Array<string>=[];
    for(let i=0;i<this.done.length;i++){
      console.log(this.done[i].userName);
      lista.push(this.done[i].userName);
      console.log("el "+i+" "+lista[i])
    }
    this.adminOption.UpdateTeam(this.newTeamForm.value.inputID, this.newTeamForm.value.inputName,lista).subscribe((data:any) =>{

     if(data.succeeded){
       alert("Uspesno dodat tim!  da li ovo prikaze");  //ne udje, ali sa servera ispise
     }
     
    }, (err:HttpErrorResponse) => {
      console.log(err)
      //alert("NEMA NIJADNOG CLANA TIMA/ Postoji vec zadat id");
      let message= err.error.text;
      //alert(message);
     
      if(message==="Uspesno izmenjen tim"){
        this.notifier.notify('default', message);
        setTimeout(() => {
          //prebaci NA SVE TIMOVE
            this.notifier.hideAll();
            this.router.navigateByUrl('/home/teams');
            
        }, 2000);
      }else{
        this.notifier.notify('error', message);
       /* setTimeout(() => {
          //ukloni obavestenje
          this.notifier.hideAll();
        }, 2000);*/
      }
   })
    
    //);
  }

}

export interface TeamElement {
  teamName: string;
  teamId:string;
  members: any[];
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessagePassingService } from '../message-passing.service';
import {DragDropModule,CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { AdminoptionsService } from '../adminoptions.service';
import {copyArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-new-team',
  templateUrl: './new-team.component.html',
  styleUrls: ['./new-team.component.css']
})
export class NewTeamComponent implements OnInit {

  newTeamForm!: FormGroup;
  
  todo:any[]=[];
  
  done:any[]=[];

  constructor(private service: MessagePassingService, private fb: FormBuilder, private adminOption: AdminoptionsService) {
    this.service.changeData("NEW TEAM")

    this.newTeamForm=this.fb.group({
      //id ne bi trebao da se unosi,sam da se generise na serveru
      inputName:['',[Validators.required,Validators.minLength(3)]],
      inputID:['',[Validators.required,Validators.minLength(3)]],
    });
  }
    
  //todo = [
    /*'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'*/
 // ];

  /*done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];*/

  /*drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log("u drugi")
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }*/
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

this.adminOption.GetTeamMemebers().subscribe(data =>{
    console.log("useri na procesiranju: ");
    console.log(data);
  
    console.log(data[1]);
    this.todo=data as any[];

    console.log(this.todo);
  });
}

  addTeam(){
    console.log('dodat team')
    const lista:Array<string>=[];
    for(let i=0;i<this.done.length;i++){
      alert(this.done[i].userName);
      lista.push(this.done[i].userName);
      alert("el "+i+" "+lista[i])
    }
    this.adminOption.AddTeam(this.newTeamForm.value.inputID, this.newTeamForm.value.inputName,lista).subscribe(data =>{
     alert(" dodat tim--"+data.toString())
    });
  }
}


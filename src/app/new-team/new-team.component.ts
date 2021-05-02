import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessagePassingService } from '../message-passing.service';
import {DragDropModule,CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-new-team',
  templateUrl: './new-team.component.html',
  styleUrls: ['./new-team.component.css']
})
export class NewTeamComponent implements OnInit {

  newTeamForm!: FormGroup;

  constructor(private service: MessagePassingService, private fb: FormBuilder) {
    this.service.changeData("NEW TEAM")

    this.newTeamForm=this.fb.group({
      //id ne bi trebao da se unosi,sam da se generise na serveru
      inputName:['',[Validators.required,Validators.minLength(3)]],
    
    });
  }
    
  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  ngOnInit(): void {
  }

  addTeam(){
    console.log('dodat team')
  }
}

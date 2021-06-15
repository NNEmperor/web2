import { Component, OnInit } from '@angular/core';
import { MessagePassingService } from '../message-passing.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  childMessage! : string

  private readonly notifier!: NotifierService;

  constructor(private service: MessagePassingService, notifierService: NotifierService){
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    this.service.data$.subscribe(res=> this.childMessage = res)
  }


  showStatus(){
    //alert("status")
    this.notifier.notify('default', "Profile status:");
  }

}

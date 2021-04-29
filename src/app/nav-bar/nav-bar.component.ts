import { Component, OnInit } from '@angular/core';
import { MessagePassingService } from '../message-passing.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  childMessage! : string

  constructor(private service: MessagePassingService){

  }

  ngOnInit(): void {
    this.service.data$.subscribe(res=> this.childMessage = res)
  }




}

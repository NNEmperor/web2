import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css'],
  template: ' Say {{ message }}'
})
export class TopNavbarComponent implements OnInit {

  //exampleChild: string="hello"
  @Input() childMessage: string='';
  constructor() { }

  ngOnInit(): void {
  }

}

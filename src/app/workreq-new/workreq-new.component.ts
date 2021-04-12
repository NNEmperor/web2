import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workreq-new',
  templateUrl: './workreq-new.component.html',
  styleUrls: ['./workreq-new.component.css']
})
export class WorkreqNewComponent implements OnInit {

  parentMessage = "Work Request-NEW"
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { MessagePassingService } from '../message-passing.service';


@Component({
  selector: 'app-new-incident-multimedia',
  templateUrl: './new-incident-multimedia.component.html',
  styleUrls: ['./new-incident-multimedia.component.css']
})
export class NewIncidentMultimediaComponent implements OnInit {

  constructor(private service: MessagePassingService ) {
    this.service.changeData("INCIDENT - NEW")
   }

  ngOnInit(): void {
  }


}

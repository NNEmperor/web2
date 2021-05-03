import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-workreq-new',
  templateUrl: './workreq-new.component.html',
  styleUrls: ['./workreq-new.component.css'],
  //styles: ['.router-link-active { background-color: red; }']
})
export class WorkreqNewComponent implements OnInit {

  constructor(/*private router: Router*/) { }

  ngOnInit(): void {
  }
  /*
  isActive(instruction: any[]): boolean {
    return this.router.isRouteActive(this.router.generate(instruction));
  }*/

}

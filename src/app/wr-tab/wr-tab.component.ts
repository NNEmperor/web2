import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MessagePassingService } from '../message-passing.service';
import { WrBasicInfoPopUpComponent } from '../wr-basic-info-pop-up/wr-basic-info-pop-up.component';

@Component({
  selector: 'app-wr-tab',
  templateUrl: './wr-tab.component.html',
  styleUrls: ['./wr-tab.component.css']
})
export class WrTabComponent implements OnInit {

  constructor(private router: Router,public dialog: MatDialog, private service: MessagePassingService) { 
    this.service.changeData("WORK REQUEST - UPDATE")
  }

  ngOnInit(): void {
  }

  UpdateWorkRequest(){
    let idwr=localStorage.getItem("wr-id")
  }
  Info(){
    //alert("b i")
    
    
  }
  History(){
    
  }

  Media(){
    
  }
  Equ(){
    
  }
}

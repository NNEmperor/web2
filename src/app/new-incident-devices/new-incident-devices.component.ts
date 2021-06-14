import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort} from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';

import { MessagePassingService } from '../message-passing.service';
import { IncidentPassingService } from '../incident-passing.service';
import { SelectDevicesPopUpComponent } from '../select-devices-pop-up/select-devices-pop-up.component';

@Component({
  selector: 'app-new-incident-devices',
  templateUrl: './new-incident-devices.component.html',
  styleUrls: ['./new-incident-devices.component.css']
})
export class NewIncidentDevicesComponent implements OnInit {

  allMineEnable = new FormControl(); 
  mySentences!:Array<Object>
  displayedColumns: string[] = ['position', 'name', 'email', 'nesto', 'location', 'delete'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  
  constructor(public dialog: MatDialog ,private service: MessagePassingService, private incidentService: IncidentPassingService ){
    this.service.changeData("INCIDENT - NEW")

   setTimeout(() => {
     this.dataSource.sort = this.sort;
     this.dataSource.paginator = this.paginator;
   });

  }

  ngOnInit(): void {
  }

  deleteDevice(e: number){
    const index = ELEMENT_DATA.indexOf(ELEMENT_DATA[e], 0);
    if (index > -1) {
    ELEMENT_DATA.splice(index, 1);
    }
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }

  showDevice(e: number){
    /** otvara se mapa u modulu */
  }

  applyFilter(filtertext:string){
    this.dataSource.filter=filtertext.trim().toLowerCase(); 
  }

  openDialog(){
    this.dialog.open(SelectDevicesPopUpComponent);
  }


}


export interface UserElement{
  position: number;
  name: string;
  email: string;
  nesto: string;
}
const ELEMENT_DATA: UserElement[] = [
 { position: 1, name: 'John', email:' john@gmail.com', nesto: 'sklj'},
 { position: 2, name: 'Herry', email: 'herry@gmail.com', nesto: 'sklj' },
 { position: 3, name: 'Ann', email: 'ann@gmail.com', nesto: 'sklj' },
 { position: 4, name: 'Johnny', email: 'johnny@gmail.com' , nesto: 'sklj'},
 { position: 5, name: 'Roy', email: 'roy@gmail.com', nesto: 'sklj' },
 { position: 6, name: 'Kia', email: 'kia@gmail.com' , nesto: 'sklj'},
 { position: 7, name: 'Merry', email: 'merry@gmail.com', nesto: 'sklj' },
 { position: 8, name: 'William', email: 'william@gmail.com', nesto: 'sklj'},
 { position: 9, name: 'Shia', email: 'shia@gmail.com', nesto: 'sklj' },
 { position: 10, name: 'Kane', email: 'kane@gmail.com' , nesto: 'sklj'}
];

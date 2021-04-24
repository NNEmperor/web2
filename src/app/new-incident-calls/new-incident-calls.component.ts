import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort} from '@angular/material/sort';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-incident-calls',
  templateUrl: './new-incident-calls.component.html',
  styleUrls: ['./new-incident-calls.component.css']
})
export class NewIncidentCallsComponent implements OnInit {

  allMineEnable = new FormControl(); 
  mySentences!:Array<Object>
  displayedColumns: string[] = ['position', 'name', 'email', 'nesto'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  parentMessage = "MY INCIDENTS"
  //@ViewChild(TopNavbarComponent)topnavbarReference;
  private router!: Router
  
 constructor() {
   
   setTimeout(() => {
     this.dataSource.sort = this.sort;
     this.dataSource.paginator = this.paginator;
   });

 }
 ngOnInit(): void {
 }
 btnNewClick () {
  this.router.navigateByUrl('/workreq-new');
};
 onDragChange() {
   console.log(this.allMineEnable.value);
   //false je ALL
   //true MINE
 } 

 applyFilter(filtertext:string){

  this.dataSource.filter=filtertext.trim().toLowerCase(); 
 }

}
export interface IncidentTypeData {
  id: string;
  type: string;
  priority: number;
  confirmed: boolean;
  status: string;
  description: string;
  ETA: Date;
  ATA: Date;
  outageTime: Date;
  ETR: Date;
  affectedUsers: number;
  numberOfCalls: number;
  voltage: number;
  repairTime: Date;
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

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryDateTimeXAxis } from 'igniteui-angular-charts';
import { MessagePassingService } from '../message-passing.service';

@Component({
  selector: 'app-new-safety-docs-history',
  templateUrl: './new-safety-docs-history.component.html',
  styleUrls: ['./new-safety-docs-history.component.css']
})
export class NewSafetyDocsHistoryComponent implements OnInit {

  allMineEnable = new FormControl(); 
  mySentences!:Array<Object>
  displayedColumns: string[] = ['position', 'name', 'email', 'nesto', 'location'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private service: MessagePassingService ) {
    this.service.changeData("SAFETY DOCUMENTS - NEW")

    setTimeout(() => {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
   }
  ngOnInit(): void {
  }


onDragChange() {
   console.log(this.allMineEnable.value);
   //false je ALL
   //true MINE
 } 

 applyFilter(filtertext:string){

  this.dataSource.filter=filtertext.trim().toLowerCase(); 
 }

}
export interface HistoryTypeData {
  changedBy: string;
  whenChanged: Date;
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


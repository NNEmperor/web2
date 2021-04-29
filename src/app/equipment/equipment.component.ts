import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort} from '@angular/material/sort';
import { MessagePassingService } from '../message-passing.service';


@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  allMineEnable = new FormControl(); 
  mySentences!:Array<Object>
  displayedColumns: string[] = ['position', 'name', 'email', 'nesto'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  
  constructor(private service: MessagePassingService ) {
    this.service.changeData("ADD NEW DEVICE")

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
export interface DeviceTypeData {
  type: string;
  id: string;
  name: string;
  address: string;
  coordinates: string;
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

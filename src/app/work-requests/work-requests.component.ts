import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort} from '@angular/material/sort';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work-requests',
  templateUrl: './work-requests.component.html',
  styleUrls: ['./work-requests.component.css'],
 // template: ' <app-top-navbar  [childMessage]="parentMessage"></app-top-navbar>'
})
export class WorkRequestsComponent implements OnInit {
    
    allMineEnable = new FormControl(); 
    mySentences!:Array<Object>
    displayedColumns: string[] = ['position', 'name', 'email'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
    parentMessage = "Work Requests"
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
 export interface UserElement {
   name: string;
   position: number;
   email: string;
 }
 const ELEMENT_DATA: UserElement[] = [
   { position: 1, name: 'John', email:' john@gmail.com'},
   { position: 2, name: 'Herry', email: 'herry@gmail.com' },
   { position: 3, name: 'Ann', email: 'ann@gmail.com' },
   { position: 4, name: 'Johnny', email: 'johnny@gmail.com' },
   { position: 5, name: 'Roy', email: 'roy@gmail.com' },
   { position: 6, name: 'Kia', email: 'kia@gmail.com' },
   { position: 7, name: 'Merry', email: 'merry@gmail.com' },
   { position: 8, name: 'William', email: 'william@gmail.com'},
   { position: 9, name: 'Shia', email: 'shia@gmail.com' },
   { position: 10, name: 'Kane', email: 'kane@gmail.com' }
 ];

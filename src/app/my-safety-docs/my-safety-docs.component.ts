import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort} from '@angular/material/sort';
import { MessagePassingService } from '../message-passing.service';



@Component({
  selector: 'app-my-safety-docs',
  templateUrl: './my-safety-docs.component.html',
  styleUrls: ['./my-safety-docs.component.css']
})
export class MySafetyDocsComponent implements OnInit {

  data: any[] = []

  allMineEnable = new FormControl(); 
  mySentences!:Array<Object>
  displayedColumns: string[] = ['id', 'type', 'status', 'notes', 'details', 'phone', 'createdWhen', 'createdBy', 'workOpCompleted', 'tagsRemoved', 'groundingRemoved', 'readyForService', 'photos'];
  dataSource;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  
  constructor(private service: MessagePassingService ) {
    this.service.changeData("SAFETY DOCUMENTS - ALL")

   setTimeout(() => {
     this.dataSource.sort = this.sort;
     this.dataSource.paginator = this.paginator;
   });

 }

 ngOnInit(): void {
  this.service.getAllDocs().subscribe(res=>{
    this.data = res as any;
    console.log(this.data);
    this.dataSource = new MatTableDataSource(this.data);
    setTimeout(() => {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  })
 }

 onDragChange() {
  if(this.allMineEnable.value == false){
    this.service.getAllDocs().subscribe(res=>{
      this.data = res as any;
      this.dataSource = new MatTableDataSource(this.data);
      setTimeout(() => {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });
    })
  }
  else{
    this.service.getMineDocs(localStorage.getItem("userName")).subscribe(res=>{
      this.data = res as any; 
      this.dataSource = new MatTableDataSource(this.data);
      setTimeout(() => {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });
    })
  }
 } 

 applyFilter(filtertext:string){

  this.dataSource.filter=filtertext.trim().toLowerCase(); 
 }

}

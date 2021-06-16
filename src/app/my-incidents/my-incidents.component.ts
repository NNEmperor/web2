import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort} from '@angular/material/sort';
import { MessagePassingService } from '../message-passing.service';
import { IncidentPassingService } from '../incident-passing.service';

@Component({
  selector: 'app-my-incidents',
  templateUrl: './my-incidents.component.html',
  styleUrls: ['./my-incidents.component.css']
})
export class MyIncidentsComponent implements OnInit {

  data: any[] = [];
  allMineEnable = new FormControl(); 

  displayedColumns: string[] = ['id', 'userNameCreator', 'type', 'priority', 'confirmed', 'status', 'description', 'eTA', 'aTA', 'outage', 'eTR', 'affectedUsers', 'numberOfCalls', 'voltageLevel', 'estimatedWorkStartTime'];
  dataSource;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  
  constructor(private service: MessagePassingService, private incidentService: IncidentPassingService ) {
    this.service.changeData("INCIDENT BROWSER - ALL")

   setTimeout(() => {
     this.dataSource.sort = this.sort;
     this.dataSource.paginator = this.paginator;
   });

 }

 headline!: string;

 ngOnInit(): void {
  this.incidentService.getAll().subscribe(res=>{
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
    this.incidentService.getAll().subscribe(res=>{
      this.data = res as any;
      this.dataSource = new MatTableDataSource(this.data);
      setTimeout(() => {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });
    })
  }
  else{
    this.incidentService.getMine().subscribe(res=>{
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


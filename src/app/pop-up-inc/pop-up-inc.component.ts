import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { WorkReqServiceService } from '../work-req-service.service';
import { FormControl } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort} from '@angular/material/sort';
import { MessagePassingService } from '../message-passing.service';
import { IncidentPassingService } from '../incident-passing.service';

@Component({
  selector: 'app-pop-up-inc',
  templateUrl: './pop-up-inc.component.html',
  styleUrls: ['./pop-up-inc.component.css']
})
export class PopUpIncComponent implements OnInit {

  selectedId: any;
  data: any[] = [];
  allMineEnable = new FormControl(); 

  displayedColumns: string[] = ['id', 'userNameCreator', 'type', 'priority', 'confirmed', 'status', 'description', 'eTA', 'aTA', 'outage', 'eTR', 'affectedUsers', 'numberOfCalls', 'voltageLevel', 'estimatedWorkStartTime', 'photos', 'team'];
  dataSource;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  
  constructor(public dialogRef: MatDialogRef<PopUpIncComponent>,private wrservis: WorkReqServiceService,private service: MessagePassingService, private incidentService: IncidentPassingService ) {
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
    this.incidentService.getMine(localStorage.getItem("userName")).subscribe(res=>{
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

 selected(data: any){
  this.selectedId = data.id;
  alert("You selected incident with id: " + this.selectedId);
  this.dialogRef.close(this.selectedId as number)
}

}

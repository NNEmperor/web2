import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort} from '@angular/material/sort';
import { MessagePassingService } from '../message-passing.service';
import { CallBack } from '../models/call-back';


@Component({
  selector: 'app-new-incident-calls',
  templateUrl: './new-incident-calls.component.html',
  styleUrls: ['./new-incident-calls.component.css']
})
export class NewIncidentCallsComponent implements OnInit {

  
  deviceData: number[] = [];
  calls: CallBack[] = [];

  displayedColumns: string[] = ['id', 'reason', 'address', 'hazard', 'comment'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  
  constructor(private service: MessagePassingService ) {
    this.service.changeData("INCIDENT - NEW")

   setTimeout(() => {
     this.dataSource.sort = this.sort;
     this.dataSource.paginator = this.paginator;
   });

 }

 ngOnInit(): void {
  this.service.incidentDevices$.subscribe( message => {this.deviceData = message; })
  this.service.getCalls(this.deviceData).subscribe(res =>{
    this.calls = res as any
    this.dataSource = new MatTableDataSource(this.calls as any);
  })
  this.service.newCall$.subscribe( message => {

     this.calls.push(message as any);
     console.log(this.calls)
    });
 }

 applyFilter(filtertext:string){

  this.dataSource.filter=filtertext.trim().toLowerCase(); 
 }

 sendIncidentCalls(){
  this.service.sendIncidentCalls(this.calls);
 }

}

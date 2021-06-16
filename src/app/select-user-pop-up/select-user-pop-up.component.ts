import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IncidentPassingService } from '../incident-passing.service';
import { CallBack } from '../models/call-back';

@Component({
  selector: 'app-select-user-pop-up',
  templateUrl: './select-user-pop-up.component.html',
  styleUrls: ['./select-user-pop-up.component.css']
})
export class SelectUserPopUpComponent implements OnInit {

  call: CallBack = new CallBack();
  data: any[] = [];
  allMineEnable = new FormControl(); 
  displayedColumns: string[] = ['userName', 'name', 'address', 'lastname'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private incidentService: IncidentPassingService, public dialogRef: MatDialogRef<SelectUserPopUpComponent>) {
    setTimeout(() => {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  ngOnInit(): void {
    this.incidentService.getUsers().subscribe( res=>{
      this.data = res as any;
      this.dataSource = new MatTableDataSource(this.data);
      setTimeout(() => {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });
    });
  }

  selected(data: any){

    this.call.Address = data.address;
    this.call.UserName = data.userName;
    this.call.Name = data.name;
    this.call.LastName = data.lastname;

    this.dialogRef.close(this.call)
  }

}

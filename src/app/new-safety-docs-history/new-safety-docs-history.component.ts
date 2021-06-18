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

  data: any[] = [];

  allMineEnable = new FormControl(); 
  mySentences!:Array<Object>
  displayedColumns: string[] = ['whoChanged', 'whenChanged'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private service: MessagePassingService ) {
    this.service.changeData("SAFETY DOCUMENTS - NEW")

  }

  ngOnInit(): void {

  }

  issue(){
    var newHistory = {
      WhoChanged: localStorage.getItem("userName"),
      WhenChanged: new Date()
    }
    this.data.push(newHistory);
    alert("Document issued")
    this.dataSource = new MatTableDataSource(this.data);
    setTimeout(() => {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  cancel(){
    var newHistory = {
      WhoChanged: localStorage.getItem("userName"),
      WhenChanged: new Date()
    }
    this.data.push(newHistory);
    alert("Document canceled")
    this.dataSource = new MatTableDataSource(this.data);
    setTimeout(() => {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  save(){
    this.service.sendDocsHistory(this.data);
    console.log(this.data)
  }

}

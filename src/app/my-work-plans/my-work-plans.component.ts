import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-my-work-plans',
  templateUrl: './my-work-plans.component.html',
  styleUrls: ['./my-work-plans.component.css']
})
export class MyWorkPlansComponent implements OnInit {

  allMineEnable = new FormControl(); 
  displayedColumns: string[] = ['id', 'startdate', 'number', 'status', 'address'];
  data: PlanElement[];
  dataSource;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() { 
    this.data = ELEMENT_DATA;
    this.dataSource = new MatTableDataSource(this.data);
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

}

export interface PlanElement {
  id: string;
  startDate:Date;
  number: string;
  status: string;
  address: string;
}

const ELEMENT_DATA: PlanElement[] = [
  { id: 'WR 1', number: '789-999', status: 'Draft', address: 'Suboticka 22', startDate: new Date(2021, 5, 5)},
  { id: 'WR 2', number: '789-999', status: 'Draft', address: 'Suboticka 22', startDate: new Date(2021, 5, 5)},
  { id: 'WR 3', number: '789-999', status: 'Draft', address: 'Suboticka 22', startDate: new Date(2021, 5, 5)},
  { id: 'WR 4', number: '789-999', status: 'Draft', address: 'Suboticka 22', startDate: new Date(2021, 5, 5)},
  { id: 'WR 5', number: '789-999', status: 'Draft', address: 'Suboticka 22', startDate: new Date(2021, 5, 5)},
  { id: 'WR 6', number: '789-999', status: 'Draft', address: 'Suboticka 22', startDate: new Date(2021, 5, 5)},
  { id: 'WR 7', number: '789-999', status: 'Draft', address: 'Suboticka 22', startDate: new Date(2021, 5, 5)},
  { id: 'WR 8', number: '789-999', status: 'Submitted', address: 'Suboticka 22', startDate: new Date(2021, 5, 5)},
  { id: 'WR 9', number: '789-999', status: 'Submitted', address: 'Suboticka 22', startDate: new Date(2021, 5, 5)},
  { id: 'WR 10', number: '789-999', status: 'Submitted', address: 'Suboticka 22', startDate: new Date(2021, 5, 5)},
  { id: 'WR 11', number: '789-999', status: 'Draft', address: 'Suboticka 22', startDate: new Date(2021, 5, 5)},

];
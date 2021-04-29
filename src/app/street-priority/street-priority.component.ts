import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-street-priority',
  templateUrl: './street-priority.component.html',
  styleUrls: ['./street-priority.component.css']
})
export class StreetPriorityComponent implements OnInit {

  displayedColumns: string[] = ['priority', 'street', 'number'];
  data: StreetElement[];
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

}

export interface StreetElement {
  street: string;
  number:string;
  priority: string;
}

const ELEMENT_DATA: StreetElement[] = [
  { street: 'Ulica1', number: '10', priority: 'Priority 1'},
  { street: 'Ulica2', number: '11', priority: 'Priority 1'},
  { street: 'Ulica3', number: '19', priority: 'Priority 2'},
  { street: 'Ulica4', number: '13', priority: 'Priority 2'},
  { street: 'Ulica5', number: '12', priority: 'Priority 1'},
  { street: 'Ulica6', number: '16', priority: 'Priority 3'},
  { street: 'Ulica9', number: '60', priority: 'Priority 1'},
  { street: 'Ulica7', number: '90', priority: 'Priority 2'},
  { street: 'Ulica8', number: '20', priority: 'Priority 1'},
];
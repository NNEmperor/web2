import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  parentMessage = "Users";
  mySentences!:Array<Object>
  displayedColumns: string[] = ['lastname', 'name', 'email', 'location', 'phonenumber'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    setTimeout(() => {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  ngOnInit(): void {
  }

}

export interface UserElement {
  name: string;
  lastname:string;
  email: string;
  location: string;
  phoneNumber: string;
  type: string;
  id: number;
}

const ELEMENT_DATA: UserElement[] = [
  { id: 1, name: 'Mark', lastname:'A', email:' mark@gmail.com', location:'Unknown', phoneNumber:'6574839844', type: 'komercijalni'},
  { id: 2, name: 'Hugo', lastname:'B', email: 'hugo@gmail.com', location:'Unknown', phoneNumber:'6574839844', type: 'komercijalni' },
  { id: 3, name: 'Diego', lastname:'F', email: 'diego@gmail.com' , location:'Unknown', phoneNumber:'6574839844', type: 'komercijalni'},
  { id: 4, name: 'Shaya', lastname:'D', email: 'shaya@gmail.com', location:'Unknown', phoneNumber:'6574839844', type: 'komercijalni' },
  { id: 5, name: 'Frank', lastname:'A', email: 'frank@gmail.com' , location:'Unknown', phoneNumber:'6574839844', type: 'komercijalni'},
  { id: 6, name: 'Martin', lastname:'A', email: 'martin@gmail.com' , location:'Unknown', phoneNumber:'6574839844', type: 'komercijalni'},
  { id: 7, name: 'Ina', lastname:'A', email: 'ina@gmail.com', location:'Unknown', phoneNumber:'6574839844', type: 'komercijalni' },
  { id: 8, name: 'Vesna', lastname:'A', email: 'vesna@gmail.com', location:'Unknown', phoneNumber:'6574839844', type: 'komercijalni'},
  { id: 9, name: 'Tamara', lastname:'A', email: 'tamara@gmail.com', location:'Unknown', phoneNumber:'6574839844', type: 'komercijalni' },
  { id: 10, name: 'Nikola', lastname:'A', email: 'nikola@gmail.com' , location:'Unknown', phoneNumber:'6574839844', type: 'komercijalni'}
];

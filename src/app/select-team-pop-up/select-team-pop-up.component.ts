import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IncidentPassingService } from '../incident-passing.service';


@Component({
  selector: 'app-select-team-pop-up',
  templateUrl: './select-team-pop-up.component.html',
  styleUrls: ['./select-team-pop-up.component.css']
})
export class SelectTeamPopUpComponent implements OnInit {


  selectedId: any;
  data: any[] = [];
  allMineEnable = new FormControl(); 
  displayedColumns: string[] = ['id', 'name'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private incidentService: IncidentPassingService, public dialogRef: MatDialogRef<SelectTeamPopUpComponent>) {
    setTimeout(() => {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
   }

  ngOnInit(): void {
    this.incidentService.getAllTeams().subscribe(res=>{
      this.data = res as any;
      this.dataSource = new MatTableDataSource(this.data);
      setTimeout(() => {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });
     })
  }

  selected(data: any){
    this.selectedId = data.teamId;
    //alert("sklj + " + this.selectedId);
    this.dialogRef.close(this.selectedId as string)
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IncidentPassingService } from '../incident-passing.service';
import { MessagePassingService } from '../message-passing.service';
import { SelectTeamPopUpComponent } from '../select-team-pop-up/select-team-pop-up.component';

@Component({
  selector: 'app-new-incident-crew',
  templateUrl: './new-incident-crew.component.html',
  styleUrls: ['./new-incident-crew.component.css']
})
export class NewIncidentCrewComponent implements OnInit {


  selectedId: any;
  showingData: any[] = [];
  data!: any;
  allMineEnable = new FormControl(); 
  displayedColumns: string[] = ['id', 'name'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialogRef: MatDialog, public dialog: MatDialog ,private service: MessagePassingService, private incidentService: IncidentPassingService ){
    this.service.changeData("INCIDENT - NEW")
    setTimeout(() => {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  ngOnInit(): void {
  }

  openDialog(){
    let dialogRef = this.dialog.open(SelectTeamPopUpComponent);
    
    dialogRef.afterClosed().subscribe(res =>{
      this.data = res;

      this.incidentService.GetTeam(res).subscribe(team =>{
        this.showingData.push(team);
        this.dataSource = new MatTableDataSource(this.showingData);
        setTimeout(() => {
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        });
      }); 
      
    })
  }

  sendCrew(){
    this.service.sendIncidentCrew(this.data);
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ConsolidatedItemHitTestBehavior_$type } from 'igniteui-angular-charts';
import { AdminoptionsService } from '../adminoptions.service';
import { MessagePassingService } from '../message-passing.service';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-pop-up-team',
  templateUrl: './pop-up-team.component.html',
  styleUrls: ['./pop-up-team.component.css']
})
export class PopUpTeamComponent implements OnInit {
  private readonly notifier!: NotifierService;
  selectedId: any;
  parentMessage = "Teams";
  mySentences!:Array<Object>
displayedColumns: string[] = [ 'teamName','teamId', 'members'];
  data:any[]=[] //TeamElement[];
  dataSource;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(public dialogRef: MatDialogRef<PopUpTeamComponent>, private adminOption: AdminoptionsService,  private router: Router, notifierService: NotifierService) {
    setTimeout(() => {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
   }

  
  ngOnInit(): void { 

    this.adminOption.GetAllTeams().subscribe(res=>{
      console.log("timovi")
      console.log(res);
      this.data=res as any;
      console.log(this.data);
      this.dataSource = new MatTableDataSource(this.data);
    setTimeout(() => {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
    });
  }

  Odabrana(data: any){
    this.selectedId = data.teamId;
  alert("You selected team with id: " + this.selectedId);
  this.dialogRef.close(this.selectedId as string)
  }
}

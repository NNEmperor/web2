import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { WorkReqServiceService } from '../work-req-service.service';

@Component({
  selector: 'app-map-doc-pop-up',
  templateUrl: './map-doc-pop-up.component.html',
  styleUrls: ['./map-doc-pop-up.component.css']
})
export class MapDocPopUpComponent implements OnInit {
  displayedColumns: string[] = ['id', 'userNameCreator', 'type', 'priority', 'confirmed', 'status', 'description', 'eTA', 'aTA', 'outage', 'eTR', 'affectedUsers', 'numberOfCalls', 'voltageLevel', 'estimatedWorkStartTime', 'photos'];
  dataSource;
  incidenti=[] as any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(public dialogRef: MatDialogRef<MapDocPopUpComponent>,private incidentService: WorkReqServiceService) {
    setTimeout(() => {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
   }
  
  ngOnInit(): void {
    let naziv=localStorage.getItem('mapa');
    console.log("NAZIV:  "+naziv);
    localStorage.removeItem('mapa');

    this.incidentService.GetIncidentMap(naziv as string).subscribe(res=>{
      console.log(res)
      this.incidenti=res;
      console.log('duzina ')
      console.log(this.incidenti.length)

      this.dataSource = new MatTableDataSource(this.incidenti);
    setTimeout(() => {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });

    })

    //naci incident za koji je vezan
  }

}

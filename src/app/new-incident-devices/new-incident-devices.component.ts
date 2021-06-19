import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort} from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';

import { MessagePassingService } from '../message-passing.service';
import { IncidentPassingService } from '../incident-passing.service';
import { SelectDevicesPopUpComponent } from '../select-devices-pop-up/select-devices-pop-up.component';
import { MapPopUpComponent } from '../map-pop-up/map-pop-up.component';

@Component({
  selector: 'app-new-incident-devices',
  templateUrl: './new-incident-devices.component.html',
  styleUrls: ['./new-incident-devices.component.css']
})
export class NewIncidentDevicesComponent implements OnInit {


  data: any[] = [];
  showingData: any[] = [];
  coords: any[] = [];
  allMineEnable = new FormControl(); 
  mySentences!:Array<Object>
  displayedColumns: string[] = ['id', 'name', 'address', 'type', 'location', 'delete'];
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

  deleteDevice(data){
    const index = this.showingData.indexOf(data);
    if(index > -1){
      this.showingData.splice(index, 1);
    }
    this.dataSource = new MatTableDataSource(this.showingData);
    setTimeout(() => {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  showDevice(e){
    console.log(e);
    this.incidentService.getCoords(e).subscribe( res => {
      let dialogRef2 = this.dialogRef.open(MapPopUpComponent, {
        data: {
          Coordinates: [res[0], res[1]]
        }
      })
    })

  }

  sendDevices(){
    this.service.sendIncidentDevices(this.data);
    alert('sklj' + this.data[0])
  }

  applyFilter(filtertext:string){
    this.dataSource.filter=filtertext.trim().toLowerCase(); 
  }

  openDialog(){
    let dialogRef = this.dialog.open(SelectDevicesPopUpComponent);
    
    dialogRef.afterClosed().subscribe(res =>{
      this.data.push(res);

      this.incidentService.getDevice(res).subscribe(device =>{
        this.showingData.push(device);
        this.dataSource = new MatTableDataSource(this.showingData);
        setTimeout(() => {
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        });
      }); 
      
    })
  }


}


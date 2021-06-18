import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort} from '@angular/material/sort';

import { MessagePassingService } from '../message-passing.service';
import { MatDialog } from '@angular/material/dialog';
import { SelectDevicesPopUpComponent } from '../select-devices-pop-up/select-devices-pop-up.component';
import { IncidentPassingService } from '../incident-passing.service';

@Component({
  selector: 'app-new-safety-docs-equipment',
  templateUrl: './new-safety-docs-equipment.component.html',
  styleUrls: ['./new-safety-docs-equipment.component.css']
})
export class NewSafetyDocsEquipmentComponent implements OnInit {

  constructor(public dialog: MatDialog, private incService: IncidentPassingService , private service: MessagePassingService ) {
    this.service.changeData("SAFETY DOCUMENTS - NEW")


   }
   
   data: any[] = [];
   showingData: any[] = [];
   allMineEnable = new FormControl(); 
   mySentences!:Array<Object>
   displayedColumns: string[] = ['id', 'name', 'address', 'type', 'location'];
   dataSource = new MatTableDataSource();
   @ViewChild(MatPaginator) paginator!: MatPaginator;
   @ViewChild(MatSort) sort!: MatSort;
 
 
  ngOnInit(): void {
  }
 
  deleteDevice(data){
    const index = this.showingData.indexOf(data);
    if(index > -1){
      this.showingData.splice(index, 1);
    }
    this.dataSource = new MatTableDataSource(this.showingData);

  }
 
  applyFilter(filtertext:string){
 
   this.dataSource.filter=filtertext.trim().toLowerCase(); 
  }

  openDialog(){
    let dialogRef = this.dialog.open(SelectDevicesPopUpComponent);

    dialogRef.afterClosed().subscribe(res =>{
      this.data.push(res);

      this.incService.getDevice(res).subscribe(device =>{
        this.showingData.push(device);
        this.dataSource = new MatTableDataSource(this.showingData);
        setTimeout(() => {
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        });
      })
    })
  }
 
  sendDevices(){
    this.service.sendDocsDevices(this.data);
    console.log(this.data)
  }

}

 

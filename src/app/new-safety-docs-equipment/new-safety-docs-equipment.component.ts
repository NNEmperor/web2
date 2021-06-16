import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort} from '@angular/material/sort';

import { MessagePassingService } from '../message-passing.service';
import { MatDialog } from '@angular/material/dialog';
import { SelectDevicesPopUpComponent } from '../select-devices-pop-up/select-devices-pop-up.component';

@Component({
  selector: 'app-new-safety-docs-equipment',
  templateUrl: './new-safety-docs-equipment.component.html',
  styleUrls: ['./new-safety-docs-equipment.component.css']
})
export class NewSafetyDocsEquipmentComponent implements OnInit {

  constructor(public dialog: MatDialog, private service: MessagePassingService ) {
    this.service.changeData("SAFETY DOCUMENTS - NEW")

    setTimeout(() => {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
   }
   
   data: any[] = [];
   allMineEnable = new FormControl(); 
   mySentences!:Array<Object>
   displayedColumns: string[] = ['id', 'name', 'address', 'type', 'location'];
   dataSource = new MatTableDataSource();
   @ViewChild(MatPaginator) paginator!: MatPaginator;
   @ViewChild(MatSort) sort!: MatSort;
 
 
  ngOnInit(): void {
  }
 

 
  applyFilter(filtertext:string){
 
   this.dataSource.filter=filtertext.trim().toLowerCase(); 
  }

  openDialog(){
    let dialogRef = this.dialog.open(SelectDevicesPopUpComponent);

    dialogRef.afterClosed().subscribe(res =>{
      this.data.push(res);
      //alert('sklj' + res);
    })
  }
 
}

 

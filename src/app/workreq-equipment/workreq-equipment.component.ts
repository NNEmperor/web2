import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IncidentPassingService } from '../incident-passing.service';
import { MapPopUpComponent } from '../map-pop-up/map-pop-up.component';
import { MessagePassingService } from '../message-passing.service';
import { SelectDevicesPopUpComponent } from '../select-devices-pop-up/select-devices-pop-up.component';

@Component({
  selector: 'app-workreq-equipment',
  templateUrl: './workreq-equipment.component.html',
  styleUrls: ['./workreq-equipment.component.css']
})
export class WorkreqEquipmentComponent implements OnInit {

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
    this.service.changeData("WORK REQUEST - NEW - Equipment")

   setTimeout(() => {
     this.dataSource.sort = this.sort;
     this.dataSource.paginator = this.paginator;
   });

  }

  ngOnInit(): void {
    let pos;
     pos=localStorage.getItem("device-wr")
     if(pos!=null){
    var rez=JSON.parse(pos);
    this.showingData=rez;
    console.log("postavljeno na ono sto je sacuvano");
    this.dataSource = new MatTableDataSource(this.showingData);
    setTimeout(() => {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
     }
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
    console.log(e);//e je id od device koji je stisnut
    this.incidentService.getCoords(e).subscribe( res => {
      let dialogRef2 = this.dialogRef.open(MapPopUpComponent, {
        data: {
          Coordinates: [res[0], res[1]] //vraca koordinate 
        }
      })
    })

  }

  saveDevices(){
    //this.service.sendIncidentDevices(this.data);//lista idjeva izabranih device-a 
    var json=JSON.stringify(this.showingData);
    console.log('-----deeeevice---')
    console.log(json);
    console.log('----------')
    localStorage.setItem("device-wr",json)
    var rez=JSON.parse(json);
    console.log('rez lista')
    console.log(rez)
    console.log("prvi"+rez[0]['id'])
    alert('sklj' + this.showingData[0])
  }


  openDialog(){
    let dialogRef = this.dialog.open(SelectDevicesPopUpComponent);
    
    dialogRef.afterClosed().subscribe(res =>{
      this.data.push(res);

     this.incidentService.getDevice(res).subscribe(device =>{
       console.log(device)
       console.log(device['id'])  //kako uzeti vrednost
       console.log(this.showingData)
       console.log("provera pre pusha")
       var contains=this.showingData.some(x => x['id'] === device['id'])  //da li sadrzi, ako da, nemoj dodati
        console.log(contains); // true
        if(!contains){
           this.showingData.push(device);   //dodavanje
        }
        console.log(this.showingData)
        console.log(this.showingData[0]['id'])
        console.log("provera")
        console.log(this.showingData.some(x => x['id'] === device['id'])); // true

        this.dataSource = new MatTableDataSource(this.showingData);
        setTimeout(() => {
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        });
      });
    })
  }

}

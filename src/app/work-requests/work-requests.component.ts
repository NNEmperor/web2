import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort} from '@angular/material/sort';
import { Router } from '@angular/router';
import { MessagePassingService } from '../message-passing.service';
import { WorkReqServiceService } from '../work-req-service.service';
import { NotifierService } from 'angular-notifier';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-work-requests',
  templateUrl: './work-requests.component.html',
  styleUrls: ['./work-requests.component.css'],
 // template: ' <app-top-navbar  [childMessage]="parentMessage"></app-top-navbar>'
})
export class WorkRequestsComponent implements OnInit {
    works:any[]=[]
    allMineEnable = new FormControl(); 
    mySentences!:Array<Object>
    fileUrls:SafeResourceUrl[]=[];
    displayedColumns: string[] = ['id','edit', 'company', 'createdDate','createdTime','creator','emergency','endWorkDate','endWorkTime','incidentID','notes','phoneNumber','purpose','startWorkDate','startWorkTime','street','type','photos'];
    dataSource ;//= new MatTableDataSource(ELEMENT_DATA);
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
    //@ViewChild(TopNavbarComponent)topnavbarReference;
    private router!: Router
    private readonly notifier!: NotifierService;
    
    constructor(private service: MessagePassingService, private wrServis:WorkReqServiceService ,notifierService: NotifierService,private routerr: Router) {
      this.service.changeData("WORK REQUEST")
      this.notifier = notifierService;
    
 
   }
   ngOnInit(): void {

    this.wrServis.GetWorkRequests().subscribe( data =>
      {
        console.log("works: ");
        console.log(data);
       // alert(data);
        this.works = data as any;
        this.dataSource = new MatTableDataSource(this.works);
        setTimeout(() => {
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        });
        if(this.works.length===0){
          this.notifier.notify('default', "No work requests to show.");
           
        }
      });

     
   }
   btnNewClick () {
    
    this.router.navigateByUrl('/workreq-new');
};
   onDragChange() {
     console.log(this.allMineEnable.value);
     //false je ALL
     //true MINE

     if(this.allMineEnable.value==false){
      this.wrServis.GetWorkRequests().subscribe( data =>
        {
          console.log("works: ");
          console.log(data);
         // alert(data);
          this.works = data as any;
          this.dataSource = new MatTableDataSource(this.works);
          setTimeout(() => {
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
          });
          if(this.works.length===0){
            this.notifier.notify('default', "No work requests to show.");
             
          }
        });
     }else{
       //MINE
       //IZVUCI KOJI MINE !!!!!
       var KORISNIK="logovan user"
       this.wrServis.GetMineWorkRequests(KORISNIK).subscribe( data =>
        {
          console.log("works: ");
          console.log(data);
         // alert(data);
          this.works = data as any;
          this.dataSource = new MatTableDataSource(this.works);
          setTimeout(() => {
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
          });
          if(this.works.length===0){
            this.notifier.notify('default', "No work requests to show.");
             
          }
        });
     }

   } 
 
   applyFilter(filtertext:string){
 
    this.dataSource.filter=filtertext.trim().toLowerCase(); 
   }

   editTeam(id:any){
    console.log("edit iiid   "+ id)
     
     this.routerr.navigateByUrl('/home/workreq-update');
   }
 
 }
 export interface UserElement {
   name: string;
   position: number;
   email: string;
 }
 

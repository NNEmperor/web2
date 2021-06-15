import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ConsolidatedItemHitTestBehavior_$type } from 'igniteui-angular-charts';
import { AdminoptionsService } from '../adminoptions.service';
import { MessagePassingService } from '../message-passing.service';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  private readonly notifier!: NotifierService;
  parentMessage = "Teams";
  mySentences!:Array<Object>
displayedColumns: string[] = [ 'teamName','teamId', 'members','edit', 'delete'];
  data:any[]=[] //TeamElement[];
  dataSource;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private service: MessagePassingService , private adminOption: AdminoptionsService,  private router: Router, notifierService: NotifierService) {
    this.service.changeData("TEAMS")
    this.notifier = notifierService;
   //poceno bilo
    /*this.data = ELEMENT_DATA;
    
    this.dataSource = new MatTableDataSource(this.data);
    setTimeout(() => {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });*/

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

  deleteTeam(e:string){
    console.log("brisi tim: "+e);
    this.adminOption.DeleteTeam(e).subscribe(res=>{
      console.log("pogodjeno brisanje")
    }, (err:HttpErrorResponse) => {
      console.log(err)
      let message= err.error.text;
      console.log("poruka "+message);
      
      this.adminOption.GetAllTeams().subscribe(res=>{
        console.log("timovi nakon brisanja")
        console.log(res);
        this.data=res as any;
        console.log(this.data);
        this.dataSource = new MatTableDataSource(this.data);
      setTimeout(() => {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });
      });
     /* setTimeout(() => {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });*/
    });


    this.notifier.notify('default', "Succeesfully deleted team.");
   /* setTimeout(() => {
      //ukloni obavestenje
      this.notifier.hideAll();
    }, 2000);*/

    //e.deleted = true;
   // this.data = ELEMENT_DATA;
    //this.data = this.data.filter(({ deleted }) => deleted == false);
    
  }

  editTeam(e:string){
  console.log("edituj tim: "+e);
  localStorage.setItem('edit-team',e);
  this.router.navigateByUrl('/home/edit-team');
  }
}

export interface TeamElement {
  name: string;
  actionid: string;
  id:string;
  members: any;
  deleted:boolean;
}
//obratiti paznju onda i na podatke u preostalim tabelama o clanovima ekipa osveziti,tipa ako he obrisana ekipa njihovo polje za ekipu urediti
/*const ELEMENT_DATA: TeamElement[] = [
  { actionid: '1', name: 'tim1',  members:['nikolina','aleksandar'], id:'id353',deleted:false},
  {  actionid: '1', name: 'tim2',  members: ['nina','borisa'], id:'id786', deleted:false},
  {  actionid: '1', name: 'tim3',members : ['ana','paula'] , id:'id78678',deleted:false},
  {  actionid: '1', name: 'tim4', members: ['jovan','ogi'] , id:'idyyy4',deleted:false},
  {  actionid: '1', name: 'tim5', members: ['rastko','acim'] , id:'id653',deleted:false},
  {  actionid: '1', name: 'tim6', members: ['kia','maja'] , id:'id23263',deleted:false},
  {  actionid: '1', name: 'tim7', members: ['merry'] , id:'id6273',deleted:false},
  {  actionid: '1', name: 'lucky4', members: ['nikola','tamara','vesna','aleksa','merry','merry','merry','merry','merry'], id:'id4',deleted:false},
  { actionid: '1', name: 'Shia team', members: ['shia'] , id:'id10',deleted:false},
  {  actionid: '1', name: 'Kane team', members: ['kane'] , id:'id100',deleted:false}
];*/

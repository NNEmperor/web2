import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MessagePassingService } from '../message-passing.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  parentMessage = "Teams";
  mySentences!:Array<Object>
displayedColumns: string[] = [ 'name','id', 'members','edit', 'delete'];
  data: TeamElement[];
  dataSource;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private service: MessagePassingService ) {
    this.service.changeData("TEAMS")
   
    this.data = ELEMENT_DATA;
    /*this.data = this.data.filter(({ deleted }) => deleted == false);*/
    this.dataSource = new MatTableDataSource(this.data);
    setTimeout(() => {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  ngOnInit(): void { 
  }

  deleteTeam(e: TeamElement){
    e.deleted = true;
    this.data = ELEMENT_DATA;
    this.data = this.data.filter(({ deleted }) => deleted == false);
    //this.dataSource = new MatTableDataSource(this.data);
  }

  editTeam(){}

}

export interface TeamElement {
  name: string;
  actionid: string;
  id:string;
  members: any;
  deleted:boolean;
}
//obratiti paznju onda i na podatke u preostalim tabelama o clanovima ekipa osveziti,tipa ako he obrisana ekipa njihovo polje za ekipu urediti
const ELEMENT_DATA: TeamElement[] = [
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
];

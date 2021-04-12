import { getParseErrors } from '@angular/compiler';
import { Component, Directive, Inject, Injectable, Input, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  data: NotificationElement[];
  index: number;
  cur: string;
  parentMessage = "Notifications";


  constructor() {
    this.data = ELEMENT_DATA;
    this.index = 0;
    this.sortByDate();
    this.cur = 'all';
   }

  ngOnInit(): void { 

  }

  errors(){
    this.data = ELEMENT_DATA;
    this.data = this.data.filter(({ type }) => type == 2);
    this.sortByDate();
  }

  all(){
    this.data = ELEMENT_DATA;
    this.sortByDate();
    this.cur = 'all';
  }

  unread(){
    this.data = ELEMENT_DATA;
    this.data = this.data.filter(({ unread }) => unread == true);
    this.sortByDate();
    this.cur = 'unread';
  }

  warnings(){
    this.data = ELEMENT_DATA;
    this.data = this.data.filter(({ type }) => type == 3);
    this.sortByDate();
    this.cur ='w';
  }

  success(){
    this.data = ELEMENT_DATA;
    this.data = this.data.filter(({ type }) => type == 1);
    this.sortByDate();
    this.cur = 'succ';
  }

  info(){
    this.data = ELEMENT_DATA;
    this.data = this.data.filter(({ type }) => type == 4);
    this.sortByDate();
    this.cur = 'info';
  }

  markAsRead(n: NotificationElement){
    this.index = this.data.findIndex(x => x.id === n.id);
    this.data[this.index].unread = false;
    if(this.cur == 'unread'){
      delete this.data[this.index];
    }
  }

  sortByDate(): void {
    this.data.sort((a: NotificationElement, b: NotificationElement) => {
        return +new Date(b.datetime) - +new Date(a.datetime);
    });
  }

  markAllAsRead(){
    this.data.forEach(element => {
      element.unread = false;
    });
    if(this.cur == 'unread'){
      this.data = [];
    }
  }
}

export interface NotificationElement{
  id: number;
  unread: boolean; //1-read, 2-unread
  type: number; //1-success, 2-error, 3- warning, 4 - info
  text: string;
  datetime: Date;

}

const ELEMENT_DATA: NotificationElement[] = [
  { id:1, unread:true, type: 1, text: 'success notification', datetime: new Date(2021, 4, 12, 13, 30, 30)},
  { id:2, unread:true,  type: 2, text: 'error notification', datetime: new Date(2021, 4, 12, 14, 30, 30)},
  { id:3, unread:true,  type: 3, text: 'warning notification', datetime: new Date(2021, 4, 12, 15, 30, 30)},
  { id:4, unread:false,  type: 4, text: 'info notification', datetime: new Date(2021, 4, 12, 13, 34, 30)},

];
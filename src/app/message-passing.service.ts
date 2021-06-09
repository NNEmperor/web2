import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { IncidentBasic } from './models/incident-basic';
import { IncidentFinal } from './models/incident-final';

@Injectable({
  providedIn: 'root'
})
export class MessagePassingService {

  readonly BaseURI="http://localhost:55333/api";

  private data = new BehaviorSubject('');
  data$ = this.data.asObservable();

  private incidentBasic = new Subject<any>();
  incidentBasic$ = this.incidentBasic.asObservable();
  private incidentResolution = new Subject<any>();
  incidentResolution$ = this.incidentResolution.asObservable();

  changeData(data: string){
    this.data.next(data)
  }

  sendIncidentBasic(message: any){ this.incidentBasic.next(message) }
  sentIncidentResolution(message: any){ this.incidentResolution.next(message) }

  UploadIncident(data: IncidentFinal){
      return this.http.post(this.BaseURI + '/Incident/AddIncident', data);
  }

  constructor(private http: HttpClient) { }
}

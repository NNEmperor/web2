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

  UploadIncident(data){

    var res ={
      Type: data.Type,
      Priority: String(data.Priority),
      Confirmed: data.Confirmed,
      Description: data.Description,
      ETA: data.ETA,
      ATA: data.ATA,
      ETR: data.ETR,
      Outage: data.Outage,
      Affected: String(data.Affected),
      NumCalls: String(data.NumCalls),
      Voltage: String(data.Voltage),
      Estimated: data.Estimated,
      Status: data.Status,
      Cause: data.Cause,
      SubCause: data.SubCause,
      TypeR: data.TypeR,
      Material: data.Material
    }


      return this.http.post(this.BaseURI + '/Incident/AddIncident', res);
  }

  constructor(private http: HttpClient) { }
}

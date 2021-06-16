import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { DeviceBack } from './models/device-back';
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
  private incidentDevices = new Subject<any>();
  incidentDevices$ = this.incidentDevices.asObservable();
  private incidentCalls = new Subject<any>();
  incidentCalls$ = this.incidentCalls.asObservable();
  private newCall = new Subject<any>();
  newCall$ = this.newCall.asObservable();

  changeData(data: string){
    this.data.next(data)
  }

  sendIncidentBasic(message: any){ this.incidentBasic.next(message) }
  sentIncidentResolution(message: any){ this.incidentResolution.next(message) }
  sendIncidentDevices(message: any){ this.incidentDevices.next(message) }
  sendIncidentCalls(message: any){ this.incidentCalls.next(message) }
  sendNewCall(message: any){ this.newCall.next(message) }

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
      Material: data.Material,
      Devices: data.Devices,
      Calls: data.Calls
    }

      return this.http.post(this.BaseURI + '/Incident/AddIncident', res);
  }

  addDevice(data){
    return this.http.post(this.BaseURI + "/Devices/AddDevice", data)
  }

  getCalls(data){
    return this.http.post(this.BaseURI + "/Calls/GetCallsForDevices", data);
  }

  addCall(data){
    return this.http.post(this.BaseURI + "/Calls/AddCall", data);
  }

  constructor(private http: HttpClient) { }
}

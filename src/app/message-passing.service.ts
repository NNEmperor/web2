import { HttpClient, HttpParams } from '@angular/common/http';
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
  private incidentMedia = new Subject<any>();
  incidentMedia$ = this.incidentMedia.asObservable();
  private incidentCrew = new Subject<any>();
  incidentCrew$ = this.incidentCrew.asObservable();

  private docsBasic = new Subject<any>();
  docsBasic$ = this.docsBasic.asObservable();
  private docsChecklsit = new Subject<any>();
  docsChecklsit$ = this.docsChecklsit.asObservable();
  private docsDevices = new Subject<any>();
  docsDevices$ = this.docsDevices.asObservable();
  private docsHistory = new Subject<any>();
  docsHistory$ = this.docsHistory.asObservable();
  private docMedia = new Subject<any>();
  docMedia$ = this.docMedia.asObservable();

  changeData(data: string){
    this.data.next(data)
  }

  sendIncidentBasic(message: any){ this.incidentBasic.next(message) }
  sentIncidentResolution(message: any){ this.incidentResolution.next(message) }
  sendIncidentDevices(message: any){ this.incidentDevices.next(message) }
  sendIncidentCalls(message: any){ this.incidentCalls.next(message) }
  sendNewCall(message: any){ this.newCall.next(message) }
  sendIncidentMedia(message: any) { this.incidentMedia.next(message) }
  sendIncidentCrew(message: any) { this.incidentMedia.next(message) }

  sendDocsBasic(message: any){ this.docsBasic.next(message) }
  sendDocsChecklist(message: any){ this.docsChecklsit.next(message) }
  sendDocsDevices(message: any){ this.docsDevices.next(message) }
  sendDocsHistory(message: any){ this.docsHistory.next(message) }
  sendDocMedia(message: any) { this.docMedia.next(message) }



  UploadIncident(data){

    var res ={
      Type: data.Type,
      UserName: localStorage.getItem("userName"),
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
    console.log(res)

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

  uploadDoc(data){
    return this.http.post(this.BaseURI + "/SafetyDoc/AddDoc", data)
  }

  getAllDocs(){
    return this.http.get(this.BaseURI + "/SafetyDoc/GetAllDocs")
  }

  getMineDocs(data){
    let params = new HttpParams();
    params = params.set('userName', data)
    return this.http.post(this.BaseURI + "/SafetyDoc/GetAllDocs", params)
  }

  getMineStatuses(data){
    let params = new HttpParams();
    params = params.set('userName', data)
    return this.http.post(this.BaseURI + "/Incident/GetMyStatuses", params)
  }

  uploadImages(data){
    return this.http.post(this.BaseURI + "/Incident/CreateImage", data);
  }

  uploadDocImages(data){
    return this.http.post(this.BaseURI + "/SafetyDoc/CreateImage", data)
  }

  constructor(private http: HttpClient) { }
}

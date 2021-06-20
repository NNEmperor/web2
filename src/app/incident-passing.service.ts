import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IncidentPassingService {

  readonly BaseURI="http://localhost:55333/api";
  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(this.BaseURI + '/Incident/GetAllIncidents')
  }

  getMine(data){
    let params = new HttpParams();
    params = params.set('userName', data)
    return this.http.post(this.BaseURI + '/Incident/GetMineIncidents', params)
  }

  getAllDevices(){
    return this.http.get(this.BaseURI + '/Devices/GetAll');
  }

  getDevice(id){
    return this.http.post(this.BaseURI + "/Devices/GetDevice", id);
  }

  getUsers(){
    return this.http.get(this.BaseURI + "/ApplicationUser/GetAllUsers");
  }

  getCoords(data){
    console.log(data)
    return this.http.post(this.BaseURI + "/Devices/GetCoords", data)
  }
  
  getAllTeams(){
    return this.http.get(this.BaseURI + '/Team/GetAllTeams');

  }

  GetTeam(timId:string){
    let params = new HttpParams();
    params = params.set('timId', timId);
    return this.http.post(this.BaseURI + '/Team/GetTeam',params);
  }

}

import { HttpClient } from '@angular/common/http';
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

  getMine(){
    return this.http.get(this.BaseURI + '/Incident/GetMineIncidents' + localStorage.getItem('userName'))
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
  
}

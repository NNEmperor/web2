import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminoptionsService {

  readonly BaseURI="http://localhost:55333/api";

  constructor(private http:HttpClient) { }

  GetRegisteredUsers(){
    console.log("pozove get registrovani")
    let apiUri=this.BaseURI+'/ApplicationUser/GetRegisteredUsers';
    return this.http.get(apiUri);
  }

  AcceptUser(userName:string){
    console.log("poziva server accept "+userName);
    let params = new HttpParams();
        params = params.set('userName', userName);
    return this.http.post(this.BaseURI + '/ApplicationUser/AcceptRegistration', params);
  }

  DenyUser(userName:string){
    console.log("poziva server accept "+userName);
    let params = new HttpParams();
        params = params.set('userName', userName);
    return this.http.post(this.BaseURI + '/ApplicationUser/DenyRegistration', params);
  }
}

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

  GetTeamMemebers(){
    console.log("pozove get clan ekipe")
    let apiUri=this.BaseURI+'/ApplicationUser/GetTeamMembers';
    return this.http.get(apiUri);
  }

  AddTeam(tid,tname, lista){
    console.log("formica za new team"+tid+"--"+tname);
    console.log("listica clanova new teama"+lista);
   // let params = new HttpParams();
     //   params = params.set('userName', userName);

     console.log("id tima je--"+tid);
     var body={
      TeamId: tid,
      TeamName: tname,
      Members: lista
    };

    return this.http.post(this.BaseURI + '/Team/AddTeam', body);
  }

  UpdateTeam(tid,tname, lista){
    console.log("formica za new team"+tid+"--"+tname);
    console.log("listica clanova new teama"+lista);
   // let params = new HttpParams();
     //   params = params.set('userName', userName);

     console.log("id tima je--"+tid);
     var body={
      TeamId: tid,
      TeamName: tname,
      Members: lista
    };

    return this.http.post(this.BaseURI + '/Team/UpdateTeam', body);
  }

  GetTeamID(){
    console.log("GENERISANJE ID-ja za tim")
    let apiUri=this.BaseURI+'/Team/GenerateTeamID';
    return this.http.get(apiUri);
  }

  GetAllTeams(){
    console.log("svi timoviiii ")
    let apiUri=this.BaseURI+'/Team/GetAllTeams';
    return this.http.get(apiUri);
  }

  DeleteTeam(teamId:string){
    console.log("poziva server obrisi "+teamId);
    let params = new HttpParams();
        params = params.set('teamId', teamId);
    return this.http.post(this.BaseURI + '/Team/DeleteTeam', params);
  }
  GetTeam(timId:string){
    let params = new HttpParams();
    console.log("parametarrrrr :"+timId);
    params = params.set('timId', timId);
    return this.http.post(this.BaseURI + '/Team/GetTeam',params);
  }
  GetMembers(timId:string){
    let params = new HttpParams();
    console.log("parametarrrrr :"+timId);
    params = params.set('timId', timId);
    return this.http.post(this.BaseURI + '/Team/GetMembers',params);
  }
  GetFreeMembers(timId:string){
    let params = new HttpParams();
    console.log("parametarrrrr :"+timId);
    params = params.set('timId', timId);
    return this.http.post(this.BaseURI + '/Team/GetFreeMembers',params);
  }
}

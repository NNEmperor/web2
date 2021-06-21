import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormUploadService {

  readonly BaseURI="http://localhost:55333/api";
  constructor(private http:HttpClient) { }

  register(forma:any){
    //let rodj=this.datepipe.transform(forma.value.bday, 'MM-dd-yyyy')  ;

    let role;
    if(forma.value.roles==2){
      role="dispecer"
    }else if(forma.value.roles==3){
      role="clan ekipe"
    }else if(forma.value.roles==1){
      role="radnik"
    }

    var body={
      UserName: forma.value.username,
      Email: forma.value.email,
      Name: forma.value.name,
      Lastname: forma.value.lastname,
      Password: forma.value.password,
      Image:forma.value.imagename,
      Address:forma.value.address,
      UserRole:role,
      Birthday:(forma.value.bday).toLocaleString(),
      SendConfirmation:forma.value.confirmation,
      Status:"procesira",
      TeamId:forma.value.teamId
    };

   return  this.http.post(this.BaseURI+"/ApplicationUser/Register", body);  //vraca observable
  }

  login(formData){
    alert('dskla')
    return this.http.post(this.BaseURI + '/ApplicationUser/Login', formData);
  }

  getStatus(id: string){
    console.log("pozove remove w r")
    console.log("MEDIA---"+id)
    let apiUri=this.BaseURI+'/ApplicationUser/GetStatus';
    let params = new HttpParams();
        params = params.set('userName', id);
    return this.http.post(apiUri,params);
  }
}

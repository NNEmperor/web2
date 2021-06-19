import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class WorkReqServiceService {

  readonly BaseURI="http://localhost:55333/api";
  workReqBasicForm: FormGroup = new FormGroup({
   
    'docType': new FormControl(),
    'status': new FormControl(),   //setovati na osnovu vrednosti iz baze
    'incident': new FormControl,
    'street': new FormControl(),
    'startdate': new FormControl(),
    'starttime': new FormControl(),
    'enddate': new FormControl(),
    'endtime': new FormControl(),
    'creator': new FormControl(),//automatski popunjava,onaj koji to radi,uzeti vrednost trenutno ulogovanog usera
    'purpose': new FormControl(), //svrha
    'notes': new FormControl(),
    'emergency': new FormControl(),
    'company': new FormControl(),
    'phoneNo': new FormControl(),
    'cratedate': new FormControl(),   //automatski
    'cratetime': new FormControl(),   //automatski

});

  constructor(private http:HttpClient) { }

  SaveBasicInfo(forma:any){
    let docType;
    if(forma.value.docType==1){
      docType='Planned Work'
    }else if(forma.value.docType==2){
      docType='Unplanned work'
    }

    this.workReqBasicForm.controls['status'].setValue(forma.value.status),
    this.workReqBasicForm.controls['incident'].setValue(forma.value.incident),
    this.workReqBasicForm.controls['street'].setValue( forma.value.street),
      this.workReqBasicForm.controls['creator'].setValue(forma.value.creator),
      this.workReqBasicForm.controls['purpose'].setValue(forma.value.purpose),
      this.workReqBasicForm.controls['notes'].setValue( forma.value.notes),
      this.workReqBasicForm.controls['emergency'].setValue( forma.value.emergency),
      this.workReqBasicForm.controls['company'].setValue(forma.value.company),
      this.workReqBasicForm.controls['docType'].setValue(docType),//ok
      this.workReqBasicForm.controls['startdate'].setValue((forma.value.startdate)),
      this.workReqBasicForm.controls['starttime'].setValue((forma.value.starttime)),
      this.workReqBasicForm.controls['enddate'].setValue((forma.value.enddate)),
      this.workReqBasicForm.controls['endtime'].setValue((forma.value.endtime)),
      this.workReqBasicForm.controls['phoneNo'].setValue(forma.value.phoneNo),
      this.workReqBasicForm.controls['cratedate'].setValue((forma.value.cratedate)),
      this.workReqBasicForm.controls['cratetime'].setValue( (forma.value.cratetime))
    

      console.log("saved")
      console.log(this.workReqBasicForm);
      //localStorage.setItem('basic',this.workReqBasicForm);
      return this.http.get('');
    }

  AddBasicInfo(forma:any){
    //let rodj=this.datepipe.transform(forma.value.bday, 'MM-dd-yyyy')  ;
    console.log(forma)
    //console.log("doooc   "+forma.value.docType)
    let docType;
    if(forma['docType']==1){
      docType="Planned Work"
    }else if(forma['docType']==2){
      docType="Unplanned work"
    }

    console.log(docType)

    var body={
      Id: forma['id'],
      Status: forma['status'],
      IncidentID: forma['incident'],
      Street: forma['street'],
      Creator:forma['creator'],
      Purpose: forma['purpose'],
      Notes: forma['notes'],
      Emergency: forma['emergency'],
      Company:forma['company'],
      Type:docType,//ok
      StartWorkDate:(forma['startdate']).toLocaleString(),
      StartWorkTime:(forma['starttime']).toLocaleString(),
      EndWorkDate:(forma['enddate']).toLocaleString(),
      EndWorkTime:(forma['endtime']).toLocaleString(),
      PhoneNumber :forma['phoneNo'],
      CreatedDate: (forma['cratedate']).toLocaleString(),
      CreatedTime: (forma['cratetime']).toLocaleString()
    };

   return  this.http.post(this.BaseURI+"/WorkRequest/AddBasicInfo", body);  //vraca observable
  }

  GetWorkRequests(){
    console.log("pozove get work request")
    let apiUri=this.BaseURI+'/WorkRequest/GetWorkRequests';
    return this.http.get(apiUri);
  }
  GetMineWorkRequests(userName: string){
    console.log("pozove get mine work request")
    let apiUri=this.BaseURI+'/WorkRequest/GetMineWorkRequests';
    let params = new HttpParams();
        params = params.set('userName', userName);
    return this.http.post(apiUri,params);
  }

  UploadMedia(file:FormData){
    //let params = new HttpParams();
      //  params = params.set('fajl', FileFormData);
   return  this.http.post<any>('http://localhost:55333/api/WorkRequest/UploadFile',file)
  }

  GenerateWorkID(){
    console.log("GENERISANJE ID-ja za w r")
    let apiUri='http://localhost:55333/api/WorkRequest/GenerateWorkID';
    let params = new HttpParams();
        params = params.set('id', '');
    return this.http.get(apiUri);
  }

  SendID(idwr){
    let apiUri=this.BaseURI+'/WorkRequest/GetID';
    let params = new HttpParams();
        params = params.set('idwr', idwr);
    return this.http.post(apiUri,params);
  }
}

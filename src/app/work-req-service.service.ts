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

    let obj;
    obj=localStorage.getItem("history-wr")
    let fff=JSON.parse(obj);
    console.log(fff);
    console.log("datum:"+fff.datum)
    let finalstate;
    let state=fff.state
    if(state==1){
      finalstate='Approve'
    }else if(state==2){
      finalstate='Deny'
    }else if(state==3){
      finalstate='Cancle'
    }else{
      finalstate='Draft'
    }

    let jsonObj;
    jsonObj =localStorage.getItem('user')
    let objObj = JSON.parse(jsonObj)

    console.log(docType)

    var body={
      Id: forma['id'],
      Status: finalstate,
      IncidentID: forma['incident'],
      Street: forma['street'],
      Creator:objObj.UserName,
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
      CreatedTime: (forma['cratetime']).toLocaleString(),
      HistoryState:finalstate
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

  SetHistory(forma){
    var obj;
    obj=localStorage.getItem("history-wr")
    let fff=JSON.parse(obj);
    console.log(fff);
    console.log("datum:"+fff.datum)
    let finalstate;
    let state=fff.state
    if(state==1){
      finalstate='Approve'
    }else if(state==2){
      finalstate='Deny'
    }else if(state==3){
      finalstate='Cancle'
    }else{
      finalstate='Draft'
    }

    let jsonObj;
    jsonObj =localStorage.getItem('user')
    let objObj = JSON.parse(jsonObj)

    //console.log("datuuum:"+obj['datum'])
    var body={
      DateHistory : fff.datum,//obj['datum'],   //greska
      HistoryState: finalstate,
      WorkRequestId: localStorage.getItem('id-wr'),
      UserName:   objObj.UserName           //UZETI LOCAL STORAGE !!!!--IZMENITI
      
    };

   return  this.http.post(this.BaseURI+"/WorkRequest/SetHistory", body);  //vraca observable
  }

  GetOneWorkRequest(id: string){
    console.log("pozove get w r")
    let apiUri=this.BaseURI+'/WorkRequest/GetOneWorkRequest';
    let params = new HttpParams();
        params = params.set('id', id);
    return this.http.post(apiUri,params);
  }

  GetHistoryWorkRequest(id: string){
    console.log("pozove get w r")
    let apiUri=this.BaseURI+'/WorkRequest/GetHistoryWorkRequest';
    let params = new HttpParams();
        params = params.set('id', id);
    return this.http.post(apiUri,params);
  }

  UpdateHistoryWorkRequest(istorija: string, id:string){
    console.log("pozove get w r")
    let apiUri=this.BaseURI+'/WorkRequest/UpdateHistoryWorkRequest';
    let params = new HttpParams();
        params = params.set('history', istorija);
        params = params.set('id', id);
    return this.http.post(apiUri,params);
  }
  GetPhotosWorkRequest(id:string){
    console.log("pozove get w r")
    let apiUri=this.BaseURI+'/WorkRequest/GetPhotosWorkRequest';
    let params = new HttpParams();
        params = params.set('id', id);
    return this.http.post(apiUri,params);
  }

  GetIncidentMap(id:string){
    console.log("pozove get w r")
    let apiUri=this.BaseURI+'/WorkRequest/GetIncidentMap';
    let params = new HttpParams();
        params = params.set('id', id );//konvertovati u int na backu
    return this.http.post(apiUri,params);
  }

  UpdateBasicInfo(forma:any){
    
    console.log(forma)
    //console.log("doooc   "+forma.value.docType)
    let docType;
    
    alert(forma['docType'])
    if(forma['docType']==1){
      docType="Planned Work"
    }else if(forma['docType']==2){
      docType="Unplanned work"
    }

   /* let obj;
    obj=localStorage.getItem("history-wr-edited")
    let fff=JSON.parse(obj);
    console.log(fff);
    console.log("datum:"+fff.datum)
    let finalstate;
    let state=fff.state
    if(state==1){
      finalstate='Approve'
    }else if(state==2){
      finalstate='Deny'
    }else if(state==3){
      finalstate='Cancle'
    }else{
      finalstate='Draft'
    }*/

    let jsonObj;
    jsonObj =localStorage.getItem('user')
    let objObj = JSON.parse(jsonObj)

    console.log(docType)

    let sdatum;
    if(forma['startdate']!=''){
      sdatum=(forma['startdate'])//.toLocaleString()
    }else{
      sdatum=forma['startdate']
    }

    let stime;
    if((forma['starttime'])!=''){
      stime=(forma['starttime'])//.toLocaleString()
    }else{
      stime=(forma['starttime'])
    }

    let edatum;
    if((forma['enddate'])!=''){
      edatum=(forma['enddate'])//.toLocaleString()
    }else{
      edatum=(forma['enddate'])
    }
    let etime;
    if((forma['endtime'])!=''){
      etime=(forma['endtime'])//.toLocaleString()
    }else{
      etime=(forma['endtime'])
    }

    var body={
      Id: forma['id'],
      Status: 'finalstate',
      IncidentID: forma['incident'],
      Street: forma['street'],
      Creator:forma['user'],//objObj.UserName,      //ostaje prvobitni////paznja
      Purpose: forma['purpose'],
      Notes: forma['notes'],
      Emergency: forma['emergency'],
      Company:forma['company'],
      Type:docType,//ok

      

      StartWorkDate:sdatum,
      StartWorkTime:stime,
      EndWorkDate:edatum,
      EndWorkTime:etime,
      PhoneNumber :forma['phoneNo'],
      CreatedDate:'',// (forma['cratedate']).toLocaleString(),
      CreatedTime: '',//(forma['cratetime']).toLocaleString(),
      HistoryState:'NES'
    };
    console.log('poooozvano'+body)
    console.log(body)
   return  this.http.post(this.BaseURI+"/WorkRequest/UpdateBasicInfo", body);  //vraca observable
  }

  RemoveMedia(id: string){
    console.log("pozove remove w r")
    console.log("MEDIA---"+id)
    let apiUri=this.BaseURI+'/WorkRequest/RemoveMedia';
    let params = new HttpParams();
        params = params.set('listid', id);
    return this.http.post(apiUri,params);
  }
}

import { HttpClient } from '@angular/common/http';
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

    let docType;
    if(forma.value.docType==1){
      docType='Planned Work'
    }else if(forma.value.docType==2){
      docType='Unplanned work'
    }

    var body={
      Status: forma.value.status,
      IncidentID: forma.value.incident,
      Street: forma.value.street,
      Creator:forma.value.creator,
      Purpose: forma.value.purpose,
      Notes: forma.value.notes,
      Emergency: forma.value.emergency,
      Company:forma.value.company,
      Type:docType,//ok
      StartWorkDate:(forma.value.startdate).toLocaleString(),
      StartWorkTime:(forma.value.starttime).toLocaleString(),
      EndWorkDate:(forma.value.enddate).toLocaleString(),
      EndWorkTime:(forma.value.endtime).toLocaleString(),
      PhoneNumber :forma.value.phoneNo,
      CreatedDate: (forma.value.cratedate).toLocaleString(),
      CreatedTime: (forma.value.cratetime).toLocaleString()
    };

   return  this.http.post(this.BaseURI+"/WorkRequest/AddBasicInfo", body);  //vraca observable
  }
}

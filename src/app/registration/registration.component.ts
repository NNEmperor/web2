import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FileUploadService } from "../file-upload.service";
import { HttpEvent, HttpEventType, HttpClient } from '@angular/common/http';
import { CustomValidationService } from '../custom-validation.service';

import { Observable, throwError } from 'rxjs';
import { FormUploadService } from '../form-upload.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PopUpTeamComponent } from '../pop-up-team/pop-up-team.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  ekipa=false;
  progress: number = 0;
  path = "assets/images/ssss.png";
  parentMessage = "Registration"
  regiForm: any;
  uloge = this.getRoles();
  selectedRole: string = '';
  selectedFile = null;
  //imageURL: string='';
  file;

  FileFormData=new FormData();//za slanje slike
  hasProfilePic=false;

  constructor(private fb: FormBuilder, public fileUploadService: FileUploadService,public uploadForm: FormUploadService ,private customValidator: CustomValidationService, private http: HttpClient, private router: Router,public dialog: MatDialog) { 
    
    this.regiForm=this.fb.group({

      username:['',[Validators.required,Validators.minLength(3)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(4),Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')]],//min 1 broj i jedno slovo
      passwordCheck:['',[Validators.required]],
      //datum
      name:['',[Validators.required,Validators.minLength(3)/*,Validators.pattern('')*/]],
      lastname:['',[Validators.required,Validators.minLength(3),/*Validators.pattern('')*/]],
      address:['',[Validators.required,Validators.minLength(3),/*Validators.pattern('')*/]],
      roles:'1',//radnik(sa pravom pregleda), dispecer, clan ekipe( ako postoje ekipe ponuditi kojoj ce pripadati),ako nema naknadno se setuje
      avatar: [null],
      imagename: [''],
      bday:['',[Validators.required]],
      confirmation:false,
      teamId:''
      //slika
      //autorizacija,autentifikcija na serveru

    },{
      validator:this.customValidator.passwordMatchValidator("password","passwordCheck")
    });
   
  }

  ngOnInit(): void {
   
    this.regiForm.valueChanges.subscribe(console.log) //svaku promenu registruje
    this.customValidator.regiForm.reset();  //resetuje forma
  }

  getRoles(){
    return [
      { id: '1', name: 'Worker (radnik)' },
      { id: '2', name: 'Dispatch (dispecer)' },
      { id: '3', name: 'Team member (clan ekipe)' }
    ];
  }

  nameValue(){
    var ime=this.regiForm.value.name;   //uzimanje vrednisti
    //alert("Name is "+ime);
    console.log("napusteno ime");
    if(ime.length<3){
      //alert("Name must be 3 characters");
    }
  }

  addUser(){
    
    /*if(this.regiForm.value.imagename.length==0){
      alert('You must add picture.')
    }else*/{
      console.log('dodat user')
      this.uploadForm.register(this.regiForm).subscribe(
        (res:any)=>{
          if(res.succeeded){
            this.customValidator.regiForm.reset();  //resetuje forma
            if(this.hasProfilePic){
              this.http.post('http://localhost:55333/api/ApplicationUser/UploadFile',this.FileFormData,{reportProgress:true,observe:'events'})
              .subscribe(event=>{
               if(event.type===HttpEventType.UploadProgress){
                 /* this.progress = Math.round(event.loaded / event.total! * 100);
                   console.log(`Uploaded! ${this.progress}%`);
                   //ovo je tek kad klikne na register, da li tako,malo konfuzno
                       setTimeout(() => {
                      this.progress = 0;
                      }, 1500);*///radilo mozda nemam pojma
                }else if(event.type===HttpEventType.Response){
                  alert("OKACENO");
                  console.log("Okaceno")
                  console.log("telo "+event.body);
                }
              });
            }
            alert("bravooo");
            this.router.navigateByUrl('/start-screen');
          }else{
            res.errors.array.forEach(element => {
              switch(element.code){
                case 'DuplicateUserName':{
                  alert("postoji username");
                  break;
                }
                default:{
                  alert("nece regi");
                  break;
                }
              }
            });
          }
        },
        err=>{
          alert("GRESKaa "+err);
        }
      );
    }

   
    //console.log("selektovana uloga :"+this.selectedOption);
    //logika za serversku stranu 
/*
    this.fileUploadService.addUser(
      this.regiForm.value.name,
      this.regiForm.value.avatar
    ).subscribe((event: HttpEvent<any>) => {
      switch (event.type) {
        /*case HttpEventType.Sent:
          console.log('Request has been made!');
          break;
        case HttpEventType.ResponseHeader:
          console.log('Response header has been received!');
          break;*/
        //case HttpEventType.UploadProgress:
         // this.progress = Math.round(event.loaded / event.total! * 100);
          //console.log(`Uploaded! ${this.progress}%`);
          //break;
        /*case HttpEventType.Response:
          console.log('User successfully created!', event.body);*/
        //  setTimeout(() => {
          //  this.progress = 0;
          //}, 1500);

      //}
    //})*/
  }
  selectChangeHandler (event: any) {
    //update the ui
    this.selectedRole = event.target.value;
    console.log(this.selectedRole);
    //3 je ekipa
    if(this.selectedRole=='3'){
      this.ekipa=true;
    }else{
      this.ekipa=false;
    }
    this.regiForm.controls['roles'].setValue(this.selectedRole);
  }
  onFileChanged(event:any) {
    this.selectedFile = event.target.files[0]
    console.log("promena slike");
  }
  ChooseTeam(){
    let dialogRef = this.dialog.open(PopUpTeamComponent);

    dialogRef.afterClosed().subscribe(res =>{
      console.log('-------')
      console.log(res)
      console.log('-------')
        let ii=res as string
      this.regiForm.controls['teamId'].setValue(ii as string)
    })
  }
Back(){
  this.router.navigateByUrl('/start-screen');
}
  showPreview(event:any) {
    console.log("duzina je: "+event.target.files.length)
    const file = event.target.files[0];
    
    this.regiForm.patchValue({
      avatar: file
    });
    this.regiForm.get('avatar')!.updateValueAndValidity()
    //this.regiForm.controls['avatar'].setValue(file);
    
    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.path = reader.result as string;
    }
    reader.readAsDataURL(file)

    this.regiForm.patchValue({
      imagename: file.name,   //setovanje imena slike
   });

    if (file) {
      console.log('this is the file = ', file);

      let fileToUpload=<File>file;  //preuzeta slika
      console.log("duzina formeee: ")
      this.FileFormData.forEach((value,key) => {
        console.log(key+" "+value)
      });
      this.FileFormData=new FormData();//da li resetuje
      this.FileFormData.append('file',fileToUpload,fileToUpload.name);
      this.hasProfilePic=true;
      this.file=file;
      this.uploadFilesSimulator(0);
      //this.progress = Math.round(event.loaded / event.total! * 100);

    }else{
      console.log('nije odabrana slika')
      alert("sliiiika   "+this.regiForm.value.avatar)
      return;   //VIDETI SA OVIM DA LI TREBA
    }



   /* //trebalo bi da gadja na backend, mozda samo ono za proracun da se ove koristi,dogovoriti se
    this.fileUploadService.addUser(
      this.regiForm.value.name,
      this.regiForm.value.avatar
    ).subscribe((event: HttpEvent<any>) => {
      switch (event.type) {
        case HttpEventType.Sent:
          console.log('Request has been made!');
          break;
        case HttpEventType.ResponseHeader:
          console.log('Response header has been received!');
          break;
        case HttpEventType.UploadProgress:
          this.progress = Math.round(event.loaded / event.total! * 100);
          console.log(`Uploaded! ${this.progress}%`);
          break;
        case HttpEventType.Response:
          console.log('User successfully created!', event.body);
          setTimeout(() => {
            this.progress = 0;
          }, 1500);

      }
    })
    //alert("Image uploaded successfuly.")
    setTimeout(() => {
      this.progress = 0;
    }, 500);

    */
  }
 
 
  // Submit Form
  submit() {
    console.log(this.regiForm.value)
  }


  uploadFilesSimulator(index: number) {
    setTimeout(() => {
      if (index === this.file.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          if (this.progress === 100) {

            setTimeout(() => {
              this.progress = 0;
            }, 1500);
            clearInterval(progressInterval);
            //this.uploadFilesSimulator(index + 1);
          } else {
            this.progress += 5;
          }
        }, 200);
      }
    }, 1000);
  }
  

}

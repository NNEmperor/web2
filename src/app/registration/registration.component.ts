import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FileUploadService } from "../file-upload.service";
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { CustomValidationService } from '../custom-validation.service';
import { AverageTrueRangeIndicator } from 'igniteui-angular-charts';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  progress: number = 0;
  path = "assets/images/prof.png";
  parentMessage = "Registration"
  regiForm!: FormGroup;
  uloge = this.getRoles();
  selectedRole: string = '';
  selectedFile = null;
  //imageURL: string='';

  constructor(private fb: FormBuilder, public fileUploadService: FileUploadService, private customValidator: CustomValidationService) { 
    
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
      bday:['',[Validators.required]]
      //slika
      //autorizacija,autentifikcija na serveru

    },{
      validator:this.customValidator.passwordMatchValidator("password","passwordCheck")
    });
   
  }

  ngOnInit(): void {
   
    this.regiForm.valueChanges.subscribe(console.log) //svaku promenu registruje
  }

  getRoles(){
    return [
      { id: '1', name: 'radnik' },
      { id: '2', name: 'dispecer' },
      { id: '3', name: 'clan ekipe' }
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

    if(this.regiForm.value.imagename.length==0){
      alert('You must add picture.')
    }else{
      console.log('dodat user')
    }

   
    //console.log("selektovana uloga :"+this.selectedOption);
    //logika za serversku stranu 
/*
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
    })*/
  }
  selectChangeHandler (event: any) {
    //update the ui
    this.selectedRole = event.target.value;
    console.log(this.selectedRole);
    this.regiForm.controls['roles'].setValue(this.selectedRole);
  }
  onFileChanged(event:any) {
    this.selectedFile = event.target.files[0]
  }


  showPreview(event:any) {
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
    }else{
      console.log('nije odabrana slika')
    }

    //trebalo bi da gadja na backend, mozda samo ono za proracun da se ove koristi,dogovoriti se
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
  }
 
 
  // Submit Form
  submit() {
    console.log(this.regiForm.value)
  }

}

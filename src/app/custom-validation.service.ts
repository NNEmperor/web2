import { Injectable } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'ol';

@Injectable({
  providedIn: 'root'
})
export class CustomValidationService {
  regiForm!: FormGroup;
  readonly BaseURI="http://localhost:63758/api";

  constructor(private http:HttpClient,private fb: FormBuilder) { 
    this.regiForm=this.fb.group({
      //videti da li treba
      UserName:['',[Validators.required,Validators.minLength(3)]],
      Email:['',[Validators.required,Validators.email]],
      Password:['',[Validators.required,Validators.minLength(4),Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')]],//min 1 broj i jedno slovo
      passwordCheck:['',[Validators.required]],
      //datum
      Name:['',[Validators.required,Validators.minLength(3)/*,Validators.pattern('')*/]],
      Lastname:['',[Validators.required,Validators.minLength(3),/*Validators.pattern('')*/]],
      address:['',[Validators.required,Validators.minLength(3),/*Validators.pattern('')*/]],
      roles:'1',//radnik(sa pravom pregleda), dispecer, clan ekipe( ako postoje ekipe ponuditi kojoj ce pripadati),ako nema naknadno se setuje
      avatar: [null],
      imagename: [''],
      bday:['',[Validators.required]]
      //slika
      //autorizacija,autentifikcija na serveru

    },{
     
    });
  }


 public passwordMatchValidator(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (
        confirmPasswordControl.errors &&
        !confirmPasswordControl.errors.passwordMismatch
      ) {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
          return true;
      } else {
        confirmPasswordControl.setErrors(null);
          return null;
      }
    };
  }
/*
  register(forma:any){
    
    var body={
      UserName: forma.value.username,
      Email: forma.value.email,
      Name: forma.value.name,
      Lastname: forma.value.lastname,
      Password: forma.value.password,
      Image:forma.value.imagename,
      Address:forma.value.address,
      //Birthday:forma.value.bday
    };

   return  this.http.post(this.BaseURI+"/ApplicationUser/Register", body);  //vraca observable
  }*/

}

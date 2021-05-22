import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'ol';

@Injectable({
  providedIn: 'root'
})
export class CustomValidationService {

  constructor(private http:HttpClient) { }

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

/*  //This goes into service
validateUsernameNotTaken(control: AbstractControl) {
  return this.checkUsernameNotTaken(control.value).pipe(
    map(res => {
      return res ? null : { usernameTaken: true };
    })
  );
}*/

//Fake API call -- You can have this in another service
/*checkUsernameNotTaken(username: string):Observable<boolean {
  //return this.http.get("assets/fakedb.json").pipe(
    
  return this.http.get('http://localhost:4200/api/GetUsernames').pipe(
    map((usernameList!: Array<any>) =>
      usernameList.filter(user => user.username === username)
    ),
    map(users => !users.length)
  );
}*/
}

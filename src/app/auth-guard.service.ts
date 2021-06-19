import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot){
    const token = localStorage.getItem('jwt');

    if(!token){
      alert("Please Log in")
      this.router.navigateByUrl("/")
      return false;
    }

    if(this.jwtHelper.isTokenExpired(token)){
      alert("Session expired please log in again")
      this.router.navigateByUrl("/")
      return false;
    }

    return true;
  }

  constructor(private router: Router, private jwtHelper: JwtHelperService) { }
}

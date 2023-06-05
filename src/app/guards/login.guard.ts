import { TokenService } from './../services/token/token.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private TokenService:TokenService,private router: Router,){}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.TokenService.isLogged()) {
        if(this.TokenService.isPostulant()){
           this.router.navigate([`home-postulant`]);
           return false
        }
        if(this.TokenService.isAdmin()){
          this.router.navigate([`home-admin`]);
          return false
       }
          

    }
    return true;
  }
  
}

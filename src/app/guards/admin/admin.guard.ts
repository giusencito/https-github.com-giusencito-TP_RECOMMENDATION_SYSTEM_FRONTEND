import { TokenService } from 'src/app/services/token/token.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    private tokenService: TokenService,
    private router: Router){}
   
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(!this.tokenService.isPostulant()){


        this.router.navigate(['/login']);
        return false
      }
    return true;
  }
  
}

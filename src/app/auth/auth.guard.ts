import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenManager } from '../services/utilities';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 
 constructor( private _router: Router){}

 
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean  {
      if (TokenManager.getClientToken()){return true;} 
      else return false;
    
    }
        
                                      
                          
}

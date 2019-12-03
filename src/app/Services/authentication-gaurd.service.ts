import { Injectable } from '@angular/core';
import { ApiServiceService } from './api-service.service';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGaurdService implements CanActivate {
 
  constructor(private api: ApiServiceService, private router: Router) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;

    return this.checkLogin(url);
  }
  checkLogin(url: string): boolean {
    if (localStorage.getItem('loggedIn')) { return true; }
    else {
      this.router.navigate(['/login']);
      return false;
    }

  }

}


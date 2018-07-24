import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Auth, AuthService} from '../services/auth.service';
import {map} from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.loggedIn
      .pipe(
        map((auth: Auth) => auth.loggedIn)
      );
  }
}

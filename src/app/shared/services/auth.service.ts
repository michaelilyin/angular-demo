import {Subject} from 'rxjs/Subject';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';

export interface Auth {
  loggedIn: boolean;
  username?: string;
}

@Injectable()
export class AuthService {

  private isLoggedIn = new ReplaySubject<Auth>(1);

  constructor() {
    this.isLoggedIn.next({
      loggedIn: false
    });
  }

  login() {
    this.isLoggedIn.next({
      loggedIn: true,
      username: 'test user'
    });
  }

  logout() {
    this.isLoggedIn.next({
      loggedIn: false
    });
  }

  public get loggedIn(): Observable<Auth> {
    return this.isLoggedIn;
  }
}

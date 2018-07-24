import {Component} from '@angular/core';
import {UsersService} from '../services/users.service';
import {User} from '../model/user';
import {Auth, AuthService} from '../../shared/services/auth.service';
import {Observable} from 'rxjs/Observable';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-users-table',
  templateUrl: './app-users-table.component.html'
})
export class AppUsersTableComponent {

  public loggedIn$: Observable<boolean>;

  public term: string;
  public users$: Observable<User[]>;

  constructor(private usersService: UsersService,
              private authService: AuthService) {
    this.loadTable();
    this.loggedIn$ = authService.loggedIn
      .pipe(
        tap(arg => { console.info(arg) }),
        map((auth: Auth) => auth.loggedIn)
      );
  }

  private loadTable(term?: string) {
    this.users$ = this.usersService.getUsers(term);
  }

  userTrack(user: User): string {
    return user.id;
  }

  search() {
    this.loadTable(this.term);
  }
}

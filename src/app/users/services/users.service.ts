import {Injectable, Provider} from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../model/user';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';

interface ServerList<T> {
  items: T[];
}

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {

  }

  public getUsers(term: string): Observable<User[]> {
    let params = new HttpParams();
    if (term) {
      params = params.set('filter', term);
    }

    return this.http.get<ServerList<User>>(`${environment.apiPrefix}/users`, {
      params: params
    }).pipe(
      map((list: ServerList<User>) => list.items)
    )
  }

  public saveUser(user: User): Observable<object> {
    return this.http.post(`${environment.apiPrefix}/users`, user)
  }
}

export const UsersServiceProvider: Provider = UsersService;

import { Component } from '@angular/core';
import {AuthService} from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appName = 'My cool demo app';

  constructor(private authService: AuthService) {

  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}

import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {UsersService} from '../services/users.service';
import {User} from '../model/user';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html'
})
export class UserAddComponent implements OnInit {
  public form: FormGroup;

  constructor(private usersService: UsersService,
              private route: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl('')
    });
  }

  create() {
    const raw = this.form.getRawValue();
    const user: User = {
      id: '0',
      firstName: raw.firstName,
      lastName: raw.firstName,
      city: 'test',
      email: 'test',
      phone: 'test'
    };
    this.usersService.saveUser(user).subscribe(() => {
      this.router.navigate(['..'], {
        relativeTo: this.route
      })
    });
  }
}

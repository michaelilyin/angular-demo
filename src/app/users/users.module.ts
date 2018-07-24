import {NgModule} from '@angular/core';
import {AppUsersTableComponent} from './users-table/app-users-table.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {UsersServiceProvider} from './services/users.service';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserAddComponent} from './user-add/user-add.component';
import {SharedModule} from '../shared/shared.module';
import {AuthGuard} from '../shared/guards/auth.guard';

@NgModule({
  declarations: [
    AppUsersTableComponent,
    UserAddComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: AppUsersTableComponent
      },
      {
        path: 'create',
        component: UserAddComponent,
        canActivate: [AuthGuard]
      }
    ])
  ],
  providers: [
    UsersServiceProvider
  ]
})
export class UsersModule {

}

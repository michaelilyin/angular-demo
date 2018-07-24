import {ModuleWithProviders, NgModule} from '@angular/core';
import {AuthService} from './services/auth.service';
import {AuthOnlyDirective} from './auth-only/auth-only.directive';
import {AuthGuard} from './guards/auth.guard';

@NgModule({
  declarations: [
    AuthOnlyDirective
  ],
  exports: [
    AuthOnlyDirective
  ]
})
export class SharedModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        AuthService,
        AuthGuard
      ]
    }
  }
}

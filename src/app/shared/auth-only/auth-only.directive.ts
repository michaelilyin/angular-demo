import {Directive, OnDestroy, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Subscription} from 'rxjs/Subscription';

@Directive({
  selector: '[authOnly]'
})
export class AuthOnlyDirective implements OnInit, OnDestroy {

  private sub: Subscription;

  constructor(private authService: AuthService,
              private templateRef: TemplateRef<any>,
              private viewContainerRef: ViewContainerRef) {

  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.sub = this.authService.loggedIn.subscribe(auth => {
      if (auth.loggedIn) {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainerRef.clear();
      }
    })
  }

}

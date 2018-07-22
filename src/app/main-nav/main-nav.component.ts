import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router) { }

  /**
   * Redirect to business-form view.
   * @param {string} businessId
   * @memberof MainNavComponent
   */
  public goToCreateBusiness(businessId: string) {
    console.log(`${MainNavComponent.name}::goToCreateBusiness`);

    this.router.navigate([`business-form`], { queryParams: { id: null, edit: false } });
  }

}

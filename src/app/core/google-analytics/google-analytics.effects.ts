import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { createEffect } from '@ngrx/effects';
import { filter, tap } from 'rxjs/operators';

@Injectable()
export class GoogleAnalyticsEffects {
  pageView = createEffect(
    () => () =>
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd),
        tap((event: NavigationEnd) => {
          ( window as any).ga('set', 'page', event.urlAfterRedirects);
          ( window as any).ga('send', 'pageview');
        })
      ),
    { dispatch: false }
  );

  constructor(readonly router: Router) { }
}

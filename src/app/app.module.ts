import { CommonModule, ViewportScroller } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Event, Router, RouterModule, Scroll } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import { filter } from 'rxjs/operators';

import { APP_ROUTES } from './app-routing';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { EhdMainComponent } from './ehd-main/ehd-main.component';
import { EhdOpzComponent } from './ehd-opz/ehd-opz.component';
import { EhdOrcComponent } from './ehd-orc/ehd-orc.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    EhdMainComponent,
    EhdOpzComponent,
    EhdOrcComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'nwk-ehd-web' }),
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    CoreModule,
    ClarityModule,
    SharedModule,
    RouterModule.forRoot(
      APP_ROUTES,
      {
        anchorScrolling: 'enabled',
        initialNavigation: 'enabled',
        scrollPositionRestoration: 'enabled'
      }
    )
    ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {
  constructor(router: Router, viewportScroller: ViewportScroller) {
  router.events.pipe(
    filter((e: Event): e is Scroll => e instanceof Scroll)
     )
     .subscribe(e => {
      if (e.position) {
        // backward navigation
        viewportScroller.scrollToPosition(e.position);
      } else if (e.anchor) {
        // anchor navigation
        viewportScroller.scrollToAnchor(e.anchor);
      } else {
        // forward navigation
        viewportScroller.scrollToPosition([0, 0]);
       }
    });
  }
}

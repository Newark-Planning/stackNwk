import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule, ViewportScroller } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Event, Router, RouterModule, Scroll } from '@angular/router';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { filter } from 'rxjs/operators';

import { APP_ROUTES } from './app-routing';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { EhdHomeComponent } from './ehd-main/home/home.component';
import { OpzHomeComponent } from './ehd-opz/home/home.component';
import { OrcHomeComponent } from './ehd-orc/home/home.component';
import { clearState, storeReducers, StoreState } from './store/store.reducers';

export const metaReducers: Array<MetaReducer<StoreState>> = [clearState];

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    EhdHomeComponent,
    OpzHomeComponent,
    OrcHomeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'nwk-ehd-web' }),
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    LayoutModule,
    CoreModule,
    SharedModule,
    RouterModule.forRoot(
      APP_ROUTES,
      {
        anchorScrolling: 'enabled',
        initialNavigation: 'enabled',
        scrollPositionRestoration: 'enabled'
      }
    ),
    StoreModule.forRoot(storeReducers, {
      metaReducers,
      runtimeChecks: {
        strictActionImmutability: false,
        strictActionSerializability: false,
        strictStateImmutability: false,
        strictStateSerializability: false
      }
    })
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

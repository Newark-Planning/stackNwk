import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ClarityModule } from '@clr/angular';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { APP_ROUTES } from './app-routing';
import { EhdMainComponent } from './ehd-main/ehd-main.component';
import { EhdOpzComponent } from './ehd-opz/ehd-opz.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, EhdMainComponent, EhdOpzComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    CoreModule,
    ClarityModule,
    SharedModule,
    RouterModule.forRoot(
      APP_ROUTES,
      { scrollPositionRestoration: 'enabled' }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}


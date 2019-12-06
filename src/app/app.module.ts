import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';

import { APP_ROUTES } from './app-routing';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { EhdMainComponent } from './ehd-main/ehd-main.component';
import { EhdOpzComponent } from './ehd-opz/ehd-opz.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, EhdMainComponent, EhdOpzComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'nwk-ehd' }),
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    CoreModule,
    ClarityModule,
    SharedModule,
    RouterModule.forRoot(
      APP_ROUTES,
      { scrollPositionRestoration: 'enabled' }
    )
    ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}

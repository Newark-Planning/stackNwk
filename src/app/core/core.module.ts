import { CommonModule } from '@angular/common';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  RouterStateSerializer
} from '@ngrx/router-store';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { environment } from '../../environments/environment';

import { TitleService } from './title/title.service';

import { AnimationsService } from './animations/animations.service';
import {
  ROUTE_ANIMATIONS_ELEMENTS,
  routeAnimations
} from './animations/route.animations';
import { HttpErrorInterceptor } from './http-interceptors/http-error.interceptor';
import { LocalStorageService } from './local-storage/local-storage.service';
import { CustomSerializer } from './router/custom-serializer';

export {
  TitleService,
  routeAnimations,
  LocalStorageService,
  ROUTE_ANIMATIONS_ELEMENTS,
  AnimationsService
};

export const httpLoaderFactory = (http: HttpClient) =>
  new TranslateHttpLoader(
    http,
    `${environment.config.i18nPrefix}/assets/i18n/`,
    '.json'
  );

@NgModule({
  exports: [TranslateModule],
  imports: [
    // angular
    CommonModule,
    HttpClientModule,

    // 3rd party
    TranslateModule.forRoot({
      loader: {
        deps: [HttpClient],
        provide: TranslateLoader,
        useFactory: httpLoaderFactory
      }
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    { provide: RouterStateSerializer, useClass: CustomSerializer }
  ]
})
export class CoreModule { }

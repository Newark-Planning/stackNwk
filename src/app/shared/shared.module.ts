import { CommonModule, registerLocaleData } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as fromComponents from './components';
import {AirService} from './services/air.service';

import en from '@angular/common/locales/en';

import { RouterModule } from '@angular/router';

registerLocaleData(en);

const SHARED_MODULE = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule
];

@NgModule({
  declarations: [
    ...fromComponents.components
  ],
  exports: [
    ...SHARED_MODULE,
    ...fromComponents.components
  ],
  imports: [SHARED_MODULE, RouterModule],
  providers: [AirService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }

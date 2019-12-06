import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import * as fromComponents from './components';
import { AirService } from './services/air.service';

import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    ...fromComponents.components
  ],
  exports: [
    ReactiveFormsModule,
    ...fromComponents.components
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  providers: [AirService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }

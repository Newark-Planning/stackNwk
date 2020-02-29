import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';

import { SharedModule } from '../shared/shared.module';

import * as components from './index';

import { ORC_ROUTES } from './ehd-orc-routing.module';

@NgModule({
  declarations: [
    components.orcComponents
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ORC_ROUTES),
    SharedModule,
    ClarityModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class EhdRcModule { }

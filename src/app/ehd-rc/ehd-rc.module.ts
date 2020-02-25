import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';

import { SharedModule } from '../shared/shared.module';

import * as components from './index';

import { RC_ROUTES } from './ehd-rc-routing.module';

@NgModule({
  declarations: [
    components.rcComponents
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(RC_ROUTES),
    SharedModule,
    ClarityModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class EhdRcModule { }

import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';

import { SharedModule } from '../shared/shared.module';

import * as components from './index';

import { EHD_ROUTES } from './ehd-main-routing.module';

@NgModule({
  declarations: [
    components.ehdComponents
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(EHD_ROUTES),
    SharedModule,
    ClarityModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class EhdMainModule { }

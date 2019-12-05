import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';

import { SharedModule } from '../shared/shared.module';
import { EHD_ROUTING } from './ehd-main-routing.module';
import { EhdMainComponent } from './ehd-main.component';

import * as components from './index';

@NgModule({
  declarations: [
    components.ehdComponents
  ],
  imports: [
    CommonModule,
    SharedModule,
    ClarityModule,
    EHD_ROUTING
  ]
})
export class EhdMainModule { }


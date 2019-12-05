import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';

import { SharedModule } from '../shared/shared.module';
import { EhdOpzComponent } from './ehd-opz.component';
import { PLANNING_ROUTING } from './ehd-opz-routing.module';

import * as components from './index';

@NgModule({
  declarations: [
    components.planningComponents,
    components.planningAboutComponents,
    components.planningMapComponents,
    components.planningResComponents,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ClarityModule,
    PLANNING_ROUTING
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EhdOpzModule { }

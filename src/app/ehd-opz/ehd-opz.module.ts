import { ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';

import { SharedModule } from '../shared/shared.module';
import { PLANNING_ROUTING } from './ehd-opz-routing.module';

import * as components from './index';
import { MapComponent } from './ourcity/map.component';

@NgModule({
  declarations: [
    components.planningComponents,
    components.planningMapComponents,
    components.planningResComponents,
    components.planningZonesComponents,
    MapComponent
  ],
  imports: [
    ClipboardModule,
    CommonModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    ClarityModule,
    PLANNING_ROUTING
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EhdOpzModule { }

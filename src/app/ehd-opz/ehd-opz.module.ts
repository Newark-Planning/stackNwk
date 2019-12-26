import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';

import { SharedModule } from '../shared/shared.module';
import { PLANNING_ROUTING } from './ehd-opz-routing.module';

import * as components from './index';

import { FormsModule } from '@angular/forms';
import { MapComponent } from './ourcity/map.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    components.planningComponents,
    components.planningAboutComponents,
    components.planningMapComponents,
    components.planningResComponents,
    components.planningBoardsComponents,
    MapComponent
  ],
  imports: [
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

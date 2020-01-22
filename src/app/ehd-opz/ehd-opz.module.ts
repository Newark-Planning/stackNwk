import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClarityModule, CLR_TABS_DIRECTIVES } from '@clr/angular';

import { SharedModule } from '../shared/shared.module';
import { PLANNING_ROUTING } from './ehd-opz-routing.module';

import * as components from './index';
import { MapComponent } from './ourcity/map.component';

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
  providers: [CLR_TABS_DIRECTIVES],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EhdOpzModule { }

import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';
import * as fromComponents from './components';
import { AirService } from './services/air.service';

import { RouterModule } from '@angular/router';
import { CalendarService, CartoService, GetRegsService, MapidService, MapService } from './services';

import { CarouselModule } from 'primeng/carousel';
import { DataViewModule } from 'primeng/dataview';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { MenuModule } from 'primeng/menu';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { SidebarModule } from 'primeng/sidebar';
import { StepsModule } from 'primeng/steps';

const primeModules = [
  MenuModule,
  FullCalendarModule,
  CarouselModule,
  DataViewModule,
  OverlayPanelModule,
  SidebarModule,
  StepsModule
];
const matModules = [
  MatSliderModule,
  MatTabsModule
];

@NgModule({
  declarations: [
    ...fromComponents.components
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    matModules,
    primeModules,
    ...fromComponents.components
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    matModules,
    primeModules
  ],
  providers: [AirService, CalendarService, CartoService, GetRegsService, MapService, MapidService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }

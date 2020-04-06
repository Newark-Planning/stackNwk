import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import * as fromComponents from './components';
import { AirService } from './services/air.service';

import {
  CartoService,
  GetRegsService,
  JsonDataService,
  MapidService,
  MapService
} from './services';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DropdownModule } from 'primeng/dropdown';
import { FieldsetModule } from 'primeng/fieldset';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { MenuModule } from 'primeng/menu';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SidebarModule } from 'primeng/sidebar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { StepsModule } from 'primeng/steps';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { TreeModule } from 'primeng/tree';
import { controllers } from './controllers';

const primeModules = [
  AutoCompleteModule,
  ButtonModule,
  CardModule,
  CarouselModule,
  ContextMenuModule,
  DropdownModule,
  MenuModule,
  FieldsetModule,
  FullCalendarModule,
  OverlayPanelModule,
  ProgressSpinnerModule,
  SidebarModule,
  SplitButtonModule,
  StepsModule,
  TableModule,
  ToastModule,
  TreeModule
];

const matModules = [
  MatButtonModule,
  MatCardModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatMenuModule,
  MatSidenavModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
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
  providers: [AirService, CartoService, controllers, GetRegsService, JsonDataService, MapService, MapidService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }

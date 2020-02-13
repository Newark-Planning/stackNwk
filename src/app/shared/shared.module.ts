import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';
import * as fromComponents from './components';
import { AirService } from './services/air.service';

import { RouterModule } from '@angular/router';
import { CartoService, GetRegsService, MapidService, MapService, SearchService } from './services';
import { GridStateService } from './services/grid.service';

@NgModule({
  declarations: [
    ...fromComponents.components
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatTabsModule,
    ...fromComponents.components
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatSliderModule,
    MatTabsModule
  ],
  providers: [AirService, CartoService, GetRegsService, GridStateService, MapService, MapidService, SearchService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }

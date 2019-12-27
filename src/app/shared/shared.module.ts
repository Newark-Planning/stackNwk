import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as fromComponents from './components';
import { AirService } from './services/air.service';

import { RouterModule } from '@angular/router';
import { SearchService } from './services';
import { GridStateService } from './services/grid.service';

@NgModule({
  declarations: [
    ...fromComponents.components
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    ...fromComponents.components
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [AirService, SearchService, GridStateService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }

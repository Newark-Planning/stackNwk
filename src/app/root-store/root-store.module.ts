import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { effects } from './effects';
import { metaReducers, reducers } from './reducers';

import { AirService } from '../shared/services';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot(effects)
  ],
  providers: [AirService]
})
export class RootStoreModule {
  static forRoot(): ModuleWithProviders<RootStoreModule> {
    return {
      ngModule: RootStoreModule
    };
  }
  constructor(@Optional() @SkipSelf() parentModule?: RootStoreModule) {
    if (parentModule) {
      throw new Error('StoreModule already loaded. Import in root module only.');
    }
  }
}

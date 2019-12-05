import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as components from './index';

export const EHD_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home'
  },
  {
    component: components.EhdHomeComponent,
    data: {
      icon: 'home',
      title: 'EHD Home'
    },
    path: 'home'
  },
  {
    component: components.EhdAboutComponent,
    data: {
      icon: 'users',
      title: 'About EHD'
    },
    path: 'about'
  }
];

export const EHD_ROUTING: ModuleWithProviders<RouterModule> = RouterModule.forChild(EHD_ROUTES);

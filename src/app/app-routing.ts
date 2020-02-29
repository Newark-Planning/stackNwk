import { Routes } from '@angular/router';

import { EhdMainComponent } from './ehd-main/ehd-main.component';
import { EhdOpzComponent } from './ehd-opz/ehd-opz.component';
import { EhdOrcComponent } from './ehd-orc/ehd-orc.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'ehd'
  },
  {
    component: EhdMainComponent,
    loadChildren: async () => import('./ehd-main/ehd-main.module')
      .then(m => m.EhdMainModule),
    path: 'ehd'
  },
  {
    component: EhdOpzComponent,
    loadChildren: async () => import('./ehd-opz/ehd-opz.module')
      .then(m => m.EhdOpzModule),
    path: 'opz'
  },
  {
    component: EhdOrcComponent,
    loadChildren: async () => import('./ehd-orc/ehd-orc.module')
      .then(m => m.EhdRcModule),
    path: 'orc'
  }
];

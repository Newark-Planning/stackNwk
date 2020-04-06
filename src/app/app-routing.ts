import { Routes } from '@angular/router';

import { EhdHomeComponent } from './ehd-main/home/home.component';
import { OpzHomeComponent } from './ehd-opz/home/home.component';
import { OrcHomeComponent } from './ehd-orc/home/home.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'ehd'
  },
  {
    component: EhdHomeComponent,
    loadChildren: async () => import('./ehd-main/ehd-main.module')
      .then(m => m.EhdMainModule),
    path: 'ehd'
  },
  {
    component: OpzHomeComponent,
    loadChildren: async () => import('./ehd-opz/ehd-opz.module')
      .then(m => m.EhdOpzModule),
    path: 'opz'
  },
  {
    component: OrcHomeComponent,
    loadChildren: async () => import('./ehd-orc/ehd-orc.module')
      .then(m => m.EhdRcModule),
    path: 'orc'
  }
];

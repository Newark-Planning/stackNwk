import { Routes } from '@angular/router';

import { EhdMainComponent } from './ehd-main/ehd-main.component';
import { EhdOpzComponent } from './ehd-opz/ehd-opz.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'ehd'
  },
  {
    component: EhdMainComponent,
    data: {
      logoSrc: 'assets/img/NwkEhdLogos/SVG/NwkEhd_EHD_Web.svg'
    },
    loadChildren: async () => import('./ehd-main/ehd-main.module')
      .then(m => m.EhdMainModule),
    path: 'ehd'
  },
  {
    component: EhdOpzComponent,
    data: {
      logoSrc: 'assets/img/NwkEhdLogos/SVG/NwkEhd_Divs_web_Planning & Zoning.svg'
    },
    loadChildren: async () => import('./ehd-opz/ehd-opz.module')
      .then(m => m.EhdOpzModule),
    path: 'opz'
  },
  {
    component: EhdRCComponent,
    data: {
      logoSrc: 'assets/img/NwkEhdLogos/SVG/NwkEhd_Divs_web_Rent Control.svg'
    },
    loadChildren: async () => import('./ehd-rc/ehd-RC.module')
      .then(m => m.EhdRCModule),
    path: 'rc'
  }
];

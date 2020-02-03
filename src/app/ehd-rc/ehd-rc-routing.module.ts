import { MyRoute } from '../shared/models';
import * as components from './index';

import { LeadersComponent } from './about/leaders/leaders.component';
import { SupportComponent } from './about/support/support.component';

export const RC_ROUTES: Array<MyRoute> = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    component: components.RCHomeComponent,
    data: {
      icon: 'home',
      title: 'EHD Home'
    },
    path: 'home'
  },
  {
    children: [
      { path: '', redirectTo: 'leadership', pathMatch: 'full' },
      { component: LeadersComponent, path: 'leadership' },
      { component: SupportComponent, path: 'support' }
    ],
    component: components.EhdAboutComponent,
    data: {
      icon: 'users',
      title: 'About EHD'
    },
    path: 'about'
  }
];

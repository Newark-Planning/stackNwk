import { MyRoute } from '../shared/models';
import * as components from './index';

export const EHD_ROUTES: Array<MyRoute> = [
  {
    path: '',
    pathMatch: 'full',
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

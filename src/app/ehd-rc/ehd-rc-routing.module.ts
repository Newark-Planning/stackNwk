import { MyRoute } from '../shared/models';
import * as components from './index';

export const RC_ROUTES: Array<MyRoute> = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    component: components.RcHomeComponent,
    data: {
      icon: 'home',
      title: 'Rent Control'
    },
    path: 'home'
  }
];

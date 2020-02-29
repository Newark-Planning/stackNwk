import { MyRoute } from '../shared/models';
import * as components from './index';

export const ORC_ROUTES: Array<MyRoute> = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    component: components.OrcHomeComponent,
    data: {
      icon: 'home',
      title: 'Rent Control'
    },
    path: 'home'
  }
];

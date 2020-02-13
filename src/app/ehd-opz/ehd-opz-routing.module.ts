import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as components from './index';

export const PLANNING_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    component: components.OpzHomeComponent,
    data: {
      icon: 'home',
      title: 'OPZ Home'
    },
    path: 'home'
  },
  {
    component: components.OpzAboutComponent,
    data: {
      icon: 'info-standard',
      title: 'About OPZ'
    },
    path: 'about'
  },
  {
    children: [
      {path: '', redirectTo: 'zba', pathMatch: 'full'},
      {data: {title: 'Planning Board'}, path: 'cpb'},
      {data: { title: 'Environmental' }, path: 'ec' },
      {data: {title: 'LHPC'}, path: 'lhpc'},
      {data: { title: 'Zoning Board' }, path: 'zba' }
    ],
    component: components.OpzBoardsComponent,
    data: {
      icon: 'users',
      title: 'Boards & Commissions'
    },
    path: 'boards'
  },
  {
    children: [
      {path: '', redirectTo: 'leadership', pathMatch: 'full'},
      {data: {title: 'Leadership'}, path: 'leadership'},
      {data: {title: 'Planners'}, path: 'planners'},
      {data: {title: 'Support'}, path: 'support'}
    ],
    component: components.OpzStaffComponent,
    data: {
      icon: 'id-badge',
      title: 'Our Team'
    },
    path: 'team'
  },
  {
    component: components.OurCityComponent,
    data: {
      icon: 'compass',
      title: 'Our City'
    },
    path: 'ourcity'
  },
  {
    component: components.OpzPlanningComponent,
    data: {
      icon: 'network-globe',
      title: 'Planning'
    },
    path: 'planning'
  },
  {
    children: [
      { path: '', redirectTo: 'zone-info', pathMatch: 'full' },
      {component: components.OpzZoningInfoComponent, data: {title: 'Zoning Info'}, path: 'zone-info'},
      {component: components.OpzZoningResComponent, data: {title: 'Residential Zoning'}, path: 'zone-res'},
      {component: components.DiagramsComponent, data: {title: 'Zoning Diagrams'}, path: 'diagrams'}
    ],
    component: components.OpzZoningComponent,
    data: {
      icon: 'cloud-chart',
      title: 'Zoning'
    },
    path: 'zoning'
  },
  {
    children: [
      { path: '', redirectTo: 'res-apps', pathMatch: 'full' },
      {component: components.ApplicationsDataComponent, data: {title: 'Applications'}, path: 'res-apps'},
      {component: components.RedevDataComponent, data: {title: 'Revelopment Plans'}, path: 'res-redev'}
    ],
    component: components.OpzResourcesComponent,
    data: {
      icon: 'book',
      title: 'Resources'
    },
    path: 'resources'
  },
  {
    component: components.OpzContactComponent,
    data: {
      icon: 'phone-handset',
      title: 'Contact Us'
    },
    path: 'contact'
  }
];

export const PLANNING_ROUTING: ModuleWithProviders<RouterModule> =
  RouterModule.forChild(PLANNING_ROUTES);

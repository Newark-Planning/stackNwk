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
      {component: components.ZBAComponent, data: {title: 'Zoning Board'}, path: 'zba'},
      {component: components.CPBComponent, data: {title: 'Planning Board'}, path: 'cpb'},
      {component: components.LHPCComponent, data: {title: 'LHPC'}, path: 'lhpc'},
      {component: components.ECComponent, data: {title: 'Environmental'}, path: 'ec'}
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
      {component: components.LeadersComponent, data: {title: 'Leadership'}, path: 'leadership'},
      {component: components.PlannersComponent, data: {title: 'Planners'}, path: 'planners'},
      {component: components.SupportComponent, data: {title: 'Support'}, path: 'support'}
    ],
    component: components.OpzStaffComponent,
    data: {
      icon: 'id-badge',
      title: 'Our Team'
    },
    path: 'team'
  },
  {
    children: [
      {path: '', redirectTo: 'map-pipeline', pathMatch: 'full'},
      {component: components.MapPipelineComponent, data: {title: 'Pipeline'}, path: 'map-pipeline'}
    ],
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

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
    children: undefined,
    component: components.OpzHomeComponent,
    data: {
      icon: 'home',
      title: 'OPZ Home'
    },
    path: 'home'
  },
  {
    children: undefined,
    component: components.OpzAboutComponent,
    data: {
      icon: 'info-standard',
      title: 'About OPZ'
    },
    path: 'about'
  },
  {
    children: [
      { path: '', redirectTo: 'zba', pathMatch: 'full' },
      { path: 'zba', component: components.ZBAComponent },
      { path: 'cpb', component: components.CPBComponent },
      { path: 'lhpc', component: components.LHPCComponent },
      { path: 'ec', component: components.ECComponent }
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
      { path: '', redirectTo: 'leadership', pathMatch: 'full' },
      { path: 'leadership', component: components.LeadersComponent },
      { path: 'planners', component: components.PlannersComponent },
      { path: 'support', component: components.SupportComponent }
    ]
    ,
    component: components.OpzStaffComponent,
    data: {
      icon: 'id-badge',
      title: 'Our Team'
    },
    path: 'team'
  },
  {
    children: [
      { path: '', redirectTo: 'map-pipeline', pathMatch: 'full' },
      { path: 'map-pipeline', component: components.MapPipelineComponent }
    ],
    component: components.OurCityComponent,
    data: {
      icon: 'compass',
      title: 'Our City'
    },
    path: 'ourcity'
  },
  {
    children: undefined,
    component: components.OpzPlanningComponent,
    data: {
      icon: 'network-globe',
      title: 'Planning'
    },
    path: 'planning'
  },
  {
    children: undefined,
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
      { path: 'res-apps', component: components.ApplicationsDataComponent }
    ],
    component: components.OpzResourcesComponent,
    data: {
      icon: 'book',
      title: 'Resources'
    },
    path: 'resources'
  },
  {
    children: undefined,
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

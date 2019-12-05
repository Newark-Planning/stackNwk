import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as components from './index';

export const PLANNING_ROUTES: Routes = [
  {
    path: '',
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
    children: [
      { path: '', redirectTo: 'leadership', pathMatch: 'full' },
      { path: 'leadership', component: components.LeadersComponent },
      { path: 'planners', component: components.PlannersComponent },
      { path: 'zoners', component: components.ZonersComponent },
      { path: 'support', component: components.SupportComponent }
    ]
    ,
    component: components.OpzAboutComponent,
    data: {
      icon: 'users',
      title: 'About Us'
    },
    path: 'about'
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
    component: components.OpzPlanningComponent,
    data: {
      icon: 'team',
      title: 'Planning'
    },
    path: 'planning'
  },
  {
    component: components.OpzZoningComponent,
    data: {
      icon: 'build',
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
  }
];

export const PLANNING_ROUTING: ModuleWithProviders<RouterModule> =
  RouterModule.forChild(PLANNING_ROUTES);

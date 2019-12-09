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
      icon: 'info',
      title: 'About OPZ'
    },
    path: 'about'
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
      icon: 'users',
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
  component: components.OpzContactComponent,
  data: {
    icon: 'info',
    title: 'Contact Us'
  },
  path: 'contact'
}
];

export const PLANNING_ROUTING: ModuleWithProviders<RouterModule> =
  RouterModule.forChild(PLANNING_ROUTES);

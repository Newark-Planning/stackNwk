import { Route } from '@angular/router';

export * from './airtable-model';
export interface MyRoute extends Route {
  icon?: string;
  title?: string;
}

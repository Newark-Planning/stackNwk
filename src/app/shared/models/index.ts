import { Route } from '@angular/router';

export * from './airtable-model';
export interface MyRoute extends Route {
  children?: undefined | Array<MyRoute>;
  icon?: string;
  title?: string;
}

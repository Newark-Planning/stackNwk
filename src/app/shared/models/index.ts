import { Route } from '@angular/router';

export * from './airtable-model';
export * from './map.input';
export * from './map';

export interface MyRoute extends Route {
  children?: undefined | Array<MyRoute>;
  icon?: string;
  title?: string;
}

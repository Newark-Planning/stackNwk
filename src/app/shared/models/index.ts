import { Route } from '@angular/router';

export * from './airtable-model';
export * from './airtable-fields.model';
export * from './airtable-bulks.model';
export * from './map.input';
export * from './map';
export * from './bulk-use.models';

export interface MyRoute extends Route {
  children?: undefined | Array<MyRoute>;
  icon?: string;
  title?: string;
}
export interface DataItem {
  color?: string;
  description?: string;
  docId?: string;
  document: string;
  embedLink?: string;
  filetype: string;
  id: number;
  link: string;
  pubDate: string | Date;
  type?: string;
}
export interface SubComponent {
  icon?: string;
  index?: number;
  label: string;
  path: string;
  viewName?: string;
}

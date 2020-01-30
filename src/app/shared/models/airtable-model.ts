import { EntityMap } from '@ngrx/entity';
import { AirBulk, AirZones } from './airtable-bulks.model';
import { ArticleFields, DocsFields, PageCompsFields, StaffFields } from './airtable-fields.model';

export interface FieldSet {
  [key: string]:
  | undefined
  | string
  | number
  | boolean
  | Collaborator
  | ReadonlyArray<Collaborator>
  | ReadonlyArray<string>
  | ReadonlyArray<Attachment>;
}

export interface Attachment {
  id?: string;
  url?: string;
  filename?: string;
  size?: number;
  type?: string;
  thumbnails?: {
    small: Thumbnail;
    large: Thumbnail;
    full: Thumbnail;
  };
}

export interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

export interface Collaborator {
  id: string;
  email: string;
  name: string;
}
export interface Record extends EntityMap<object> {
  id: string;
  fields: [
    | FieldSet
    | undefined
    | StaffFields
    | PageCompsFields
    | DocsFields
    | ArticleFields
    | AirBulk
    | AirZones
  ];
  createdTime: string;
}

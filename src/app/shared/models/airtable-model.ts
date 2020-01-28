import { EntityMap } from '@ngrx/entity';

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
export interface StaffFields {
  'Name-First': string;
  'Name-Last': string;
  'Name-Extra'?: string;
  'Position'?: string;
  'Hierarchy'?: string | number;
  'Headshot'?: string | Array<Attachment>;
  'Bio'?: string;
}
export interface PageCompsFields {
  'Name': string;
  'Page': string;
  'Tag'?: string;
  'Notes'?: string;
  'Content'?: any;
  'Attachments'?: string | Array<Attachment>;
  'Author/Contributor'?: string | [Array<Record['id']>];
}
export interface DocsFields {
  'Name': string;
  'Notes'?: string;
  'Attachments'?: string | Array<Attachment>;
}
export interface ArticleFields {
  'Name': string;
  'Subtitle': string;
  'Date'?: string;
  'Tag'?: Array<string>;
  'CoverPhoto'?: string | Array<Attachment>;
  'Description'?: string;
  'BodyText'?: string;
  'OtherPix'?: string | Array<Attachment>;
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
  ];
  createdTime: string;
}

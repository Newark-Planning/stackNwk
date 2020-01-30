import { Attachment, Record } from './airtable-model';

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

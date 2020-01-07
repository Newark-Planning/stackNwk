export interface Resource {
    color?: string;
    description?: string;
    document?: string;
    filetype?: string;
    id?: number;
    link?: string;
    pubDate?: string | Date;
    type?: string;
    [key: string]: any;
  }

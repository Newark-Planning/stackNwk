import { StoreConfigToolbar } from './config-toolbar.interface';

export interface StoreConfigSidebar {
  collapsible?: boolean;
  opened?: boolean;
  title?: string;
  toolbar?: StoreConfigToolbar;
  mode?: 'side' | 'push' | 'over';
}

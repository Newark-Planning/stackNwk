import { Action } from '@ngrx/store';
import { SidebarLink } from '../../shared/interfaces/other.interface';

export const TOGGLE = '[Sidebar] Toggle';
export const SET_HAS_SIDEBAR = '[Sidebar] Set Has Sidebar';
export const SET_MODE = '[Sidebar] Set Mode';
export const SET_COLLAPSIBLE = '[Sidebar] Set Collapsible';
export const SET_OPENED = '[Sidebar] Set Opened';
export const SET_TITLE = '[Sidebar] Set Title';
export const SET_SELECTED_MODULE = '[Sidebar] Set Selected Module';
export const SET_SIDEBAR_ROUTES = '[Sidebar] Set Current Sidebar Routes';

export class Toggle implements Action {
  readonly type = TOGGLE;
}
// tslint:disable: max-classes-per-file
export class SetHasSidebar implements Action {
  readonly type = SET_HAS_SIDEBAR;
  constructor(public payload: boolean) {}
}
export class SetMode implements Action {
  readonly type = SET_MODE;
  constructor(public payload: string) {}
}
export class SetCollapsible implements Action {
  readonly type = SET_COLLAPSIBLE;
  constructor(public payload: boolean) {}
}
export class SetOpened implements Action {
  readonly type = SET_OPENED;
  constructor(public payload: boolean) {}
}
export class SetTitle implements Action {
  readonly type = SET_TITLE;
  constructor(public payload: string) {}
}
export class SetSelectedModule implements Action {
  readonly type = SET_SELECTED_MODULE;
  constructor(public payload: string) {}
}
export class SetSidebarRoutes implements Action {
  readonly type = SET_SIDEBAR_ROUTES;
  constructor(public payload: Array<SidebarLink>) { }
}

export type SidebarActions =
  | Toggle
  | SetHasSidebar
  | SetMode
  | SetCollapsible
  | SetOpened
  | SetTitle
  | SetSelectedModule
  | SetSidebarRoutes;

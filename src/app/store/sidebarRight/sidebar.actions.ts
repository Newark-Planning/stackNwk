import { Action } from '@ngrx/store';

export const TOGGLE = '[Sidebar Right] Toggle';
export const SET_HAS_SIDEBAR = '[Sidebar Right] Set Has Sidebar';
export const SET_MODE = '[Sidebar Right] Set Mode';
export const SET_COLLAPSIBLE = '[Sidebar Right] Set Collapsible';
export const SET_OPENED = '[Sidebar Right] Set Opened';
export const SET_TITLE = '[Sidebar Right] Set Title';
export const SET_SELECTED_MODULE = '[Sidebar Right] Set Selected Module';

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

export type SidebarRightActions =
  | Toggle
  | SetHasSidebar
  | SetMode
  | SetCollapsible
  | SetOpened
  | SetTitle
  | SetSelectedModule;

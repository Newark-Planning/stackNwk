import { Action } from '@ngrx/store';
import { StoreConfig } from '../../shared/interfaces/config.interface';

export const SET_CONFIG = '[Config] Set Config';

export class SetConfig implements Action {
  readonly type = SET_CONFIG;
  constructor(public payload: StoreConfig) {}
}

export type ConfigActions = SetConfig;

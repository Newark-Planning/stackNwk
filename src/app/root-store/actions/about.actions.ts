import { Dictionary } from '@ngrx/entity';
import { Action } from '@ngrx/store';
import { Record } from '../../models';

export enum AboutActionTypes {
  LoadDataBegin = '[Airtable-About] Load Request',
  LoadDataFailure = '[Airtable-About] Load Failure',
  LoadDataSuccess = '[Airtable-About] Load Success'
}

export class LoadDataBegin implements Action {
  readonly type = AboutActionTypes.LoadDataBegin;
}

// tslint:disable-next-line: max-classes-per-file
export class LoadDataSuccess implements Action {
  readonly type = AboutActionTypes.LoadDataSuccess;

  constructor(public payload: { data: Dictionary<Record> }) { }
}

// tslint:disable-next-line: max-classes-per-file
export class LoadDataFailure implements Action {
  readonly type = AboutActionTypes.LoadDataFailure;
  constructor(public payload: { error: any }) { }
}

export type AboutActions =
  | LoadDataBegin
  | LoadDataFailure
  | LoadDataSuccess;

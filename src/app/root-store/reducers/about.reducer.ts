import * as fromData from '../actions/about.actions';

import { Dictionary, EntityState } from '@ngrx/entity';

import { Record } from '../../models';

export interface DataState extends EntityState<Record> {
  entities: Dictionary<Record>;
  loading: boolean;
  error: any;
}

export const initialState: DataState = {
  entities: {},
  error: undefined,
  ids: [],
  loading: false
};

// tslint:disable-next-line: only-arrow-functions
export function reducer(
  state = initialState,
  action: fromData.AboutActions
): DataState {
  switch (action.type) {
    case fromData.AboutActionTypes.LoadDataBegin: {
      return {
        ...state,
        error: undefined,
        loading: true
      };
    }

    case fromData.AboutActionTypes.LoadDataSuccess: {
      return {
        ...state,
        entities: action.payload.data,
        error: 'None, all good',
        loading: false
      };
    }

    case fromData.AboutActionTypes.LoadDataFailure: {
      return {
        ...state,
        entities: {},
        error: action.payload.error,
        loading: false
      };
    }

    default: {
      return state;
    }
  }
}

export const getItems = (state: DataState) => state.entities;

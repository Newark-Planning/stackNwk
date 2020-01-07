import { ActionReducer, INIT, UPDATE } from '@ngrx/store';

import { AppState } from '../core.state';
import { LocalStorageService } from '../local-storage/local-storage.service';

export const initStateFromLocalStorage = (
  reducer: ActionReducer<AppState>
): ActionReducer<AppState> => (state, action) => {
    const newState = reducer(state, action);
    if ([INIT.toString(), UPDATE.toString()].includes(action.type)) {
      return { ...newState, ...LocalStorageService.loadInitialState() };
    }

    return newState;
  };

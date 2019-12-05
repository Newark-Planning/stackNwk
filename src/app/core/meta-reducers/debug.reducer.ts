import { ActionReducer } from '@ngrx/store';

import { AppState } from '../core.state';

export const debug = (
  reducer: ActionReducer<AppState>
): ActionReducer<AppState> => (state, action) => {
    const newState = reducer(state, action);
    // tslint:disable-next-line: no-console
    console.log(`[DEBUG] action: ${action.type}`, {
      newState,
      oldState: state,
      payload: ( action as any).payload
    });

    return newState;
  };

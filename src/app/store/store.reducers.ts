import { ActionReducer, ActionReducerMap } from '@ngrx/store';

import * as fromConfig from './config/config.reducers';
import * as fromSidebar from './sidebar/sidebar.reducers';
import * as fromSidebarRight from './sidebarRight/sidebar.reducers';
import * as StoreActions from './store.actions';

export interface StoreState {
  config: fromConfig.State;
  sidebar: fromSidebar.State;
  sidebarRight: fromSidebarRight.State;
}

export const storeReducers: ActionReducerMap<StoreState> = {
  config: fromConfig.configReducer,
  sidebar: fromSidebar.sidebarReducer,
  sidebarRight: fromSidebarRight.sidebarRightReducer
};

export const clearState = (
  reducer: ActionReducer<StoreState>
): ActionReducer<StoreState> =>
  (
    state: StoreState | undefined,
    action: StoreActions.StoreActions
  ): StoreState => {
    switch (action.type) {
      case StoreActions.CLEAR_STATE:
        // tslint:disable-next-line: no-parameter-reassignment
        state = undefined;
        break;
      default:
        break;
    }

    return reducer(state, action);
  };

import { StoreConfig } from '../../shared/interfaces/config.interface';
import * as ConfigActions from './config.actions';

export interface State {
  config?: StoreConfig;
}

const initialState: State = {
  config: undefined
};

export const configReducer = (
  state = initialState,
  action: ConfigActions.ConfigActions
) => {
  switch (action.type) {
    case ConfigActions.SET_CONFIG:
      return { ...state, config: action.payload };
    default:
      return state;
  }
};

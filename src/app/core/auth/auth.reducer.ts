import { createReducer, on } from '@ngrx/store';
import { authLogin, authLogout } from './auth.actions';
import { AuthState } from './auth.models';

export const initialState: AuthState = {
  isAuthenticated: false
};

const reducer = createReducer(
  initialState,
  on(authLogin, state => ({ ...state, isAuthenticated: true })),
  on(authLogout, state => ({ ...state, isAuthenticated: false }))
);

export const authReducer = reducer;

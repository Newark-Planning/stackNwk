import { createReducer, on } from '@ngrx/store';
import {
  actionSettingsChangeAnimationsElements,
  actionSettingsChangeAnimationsPage,
  actionSettingsChangeAnimationsPageDisabled,
  actionSettingsChangeAutoNightMode,
  actionSettingsChangeHour,
  actionSettingsChangeLanguage,
  actionSettingsChangeStickyHeader,
  actionSettingsChangeTheme
} from './settings.actions';
import { NIGHT_MODE_THEME, SettingsState } from './settings.model';

export const initialState: SettingsState = {
  autoNightMode: false,
  elementsAnimations: true,
  hour: 0,
  language: 'en',
  nightTheme: NIGHT_MODE_THEME,
  pageAnimations: true,
  pageAnimationsDisabled: false,
  stickyHeader: true,
  theme: 'DEFAULT-THEME'
};

const reducer = createReducer(
  initialState,
  on(
    actionSettingsChangeLanguage,
    actionSettingsChangeTheme,
    actionSettingsChangeAutoNightMode,
    actionSettingsChangeStickyHeader,
    actionSettingsChangeAnimationsPage,
    actionSettingsChangeAnimationsElements,
    actionSettingsChangeHour,
    (state, action) => ({ ...state, ...action })
  ),
  on(
    actionSettingsChangeAnimationsPageDisabled,
    (state, { pageAnimationsDisabled }) => ({
      ...state,
      pageAnimations: false,
      pageAnimationsDisabled
    })
  )
);

export const settingsReducer = reducer;

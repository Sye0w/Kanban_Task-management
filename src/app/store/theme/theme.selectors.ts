import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ITheme } from './theme.reducer';

export const selectThemeState = createFeatureSelector<ITheme>('Theme')

export const selectTheme = createSelector(
  selectThemeState,
  (state: ITheme) => state.darkMode
);



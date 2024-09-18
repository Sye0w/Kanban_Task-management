import { createReducer, on } from '@ngrx/store';
import { switchTheme } from './theme.actions';

export interface ITheme {
  darkMode: boolean;
}


export const initialState: ITheme = {
  darkMode: false
};

export const themeReducer = createReducer(
  initialState,
  on(switchTheme,(state: ITheme) =>{
    return {
      ...state,
      darkMode: !state.darkMode
    };
  })
);


import { ActionReducerMap } from "@ngrx/store";
import { RouterReducerState, routerReducer } from '@ngrx/router-store';
import * as theme from '../theme/theme.reducer';
import * as kanban from '../kanban/kanban.reducer';

export interface AppState {
  theme: theme.ITheme;
  router: RouterReducerState<any>;
  kanban: kanban.State;
}

export const appReducers: ActionReducerMap<AppState> = {
  theme: theme.themeReducer,
  router: routerReducer,
  kanban: kanban.kanbanReducer
};

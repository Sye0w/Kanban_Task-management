// import { KanbanState } from './../kanban/kanban.model';
import { ActionReducerMap} from "@ngrx/store";
import { RouterReducerState, routerReducer } from '@ngrx/router-store'
import * as theme from '../theme/theme.reducer';
import * as kanbanBoards from '../kanban/kanban.reducer';
import { State } from "../kanban/kanban.model";

export interface Appstate {
  theme: theme.ITheme;
  router: RouterReducerState<any>;
  kanbanBoards: State;
}

export const appReducers: ActionReducerMap<Appstate> = {
 theme: theme.themeReducer,
 router: routerReducer,
 kanbanBoards: kanbanBoards.kanbanReducer
}


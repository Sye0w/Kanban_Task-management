import { createAction, props } from '@ngrx/store';
import { Board } from './kanban.model';

export const loadBoards = createAction('[Kanban] Load Boards');
export const loadBoardsSuccess = createAction(
  '[Kanban] Load Boards Success',
  props<{ boards: Board[] }>()
);
export const loadBoardsFailure = createAction(
  '[Kanban] Load Boards Failure',
  props<{ error: any }>()
);

export const createBoard = createAction(
  '[Kanban] Create Board',  props<{ board: Board }>());

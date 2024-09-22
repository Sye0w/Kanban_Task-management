import { createAction, props } from '@ngrx/store';
import { IBoard } from './kanban.model';

export const loadBoards = createAction('[Kanban] Load Boards');
export const loadBoardsSuccess = createAction(
  '[Kanban] Load Boards Success',
  props<{ boards: IBoard[] }>()
);
export const loadBoardsFailure = createAction(
  '[Kanban] Load Boards Failure',
  props<{ error: any }>()
);

export const createBoard = createAction(
  '[Kanban] Create Board',  props<{ board: IBoard }>());

export const editBoard = createAction(
  '[Kanban] Edit Board', props<{ board: IBoard }>());

export const deleteBoard = createAction(
  '[Kanban] Delete Board', props<{ boardId: string }>()
  );

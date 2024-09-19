import { createAction, props } from '@ngrx/store';
import { IBoard, Task, Subtask, Column, IBoardsData } from './kanban.model';

export const loadBoards = createAction('[Kanban] Load Boards');
export const loadBoardsFailure = createAction('[Kanban] Load Boards Failure', props<{ error: string }>());
export const loadBoardsSuccess = createAction('[Kanban] Load Boards Success', props<{board:IBoard[]}>());

export const addBoard = createAction('[Kanban] Add Board', props<{ board: IBoard }>());
export const editBoard = createAction('[Kanban] Update Board', props<{ board: IBoard }>());
export const deleteBoard = createAction('[Kanban] Delete Board', props<{ id: string }>());

export const selectBoard = createAction('[Kanban] Select Board', props<{ id: string }>());

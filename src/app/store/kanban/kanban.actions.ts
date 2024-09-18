import { createAction, props } from '@ngrx/store';
import { IBoard } from './kanban.model';

export const loadKanban = createAction ('[Kanban Tasks] Load Kanban Tasks')
export const loadKanbanSuccess = createAction (
  '[Kanban Tasks] Load Tasks Success',
  props<{ boards: IBoard[] }>() );

export const loadKanbanFailure = createAction (
  '[Kanban Tasks] Load Tasks Failure',
  props<{ error: any }>() );



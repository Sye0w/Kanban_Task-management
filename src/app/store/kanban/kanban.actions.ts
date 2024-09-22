import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IBoard } from './kanban.model';

export const KanbanActions = createActionGroup({
  source: 'Kanban',
  events: {
    'Load Boards': emptyProps(),
    'Load Boards Success': props<{ boards: IBoard[] }>(),
    'Load Boards Failure': props<{ error: any }>(),
    'Create Board': props<{ board: IBoard }>(),
    'Edit Board': props<{ board: IBoard }>(),
    'Delete Board': props<{ boardId: string }>()
  }
});

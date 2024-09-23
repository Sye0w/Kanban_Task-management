import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IBoard, Task } from './kanban.model';

export const KanbanActions = createActionGroup({
  source: 'Kanban',
  events: {
    'Load Boards': emptyProps(),
    'Load Boards Success': props<{ boards: IBoard[] }>(),
    'Load Boards Failure': props<{ error: any }>(),
    'Create Board': props<{ board: IBoard }>(),
    'Edit Board': props<{ board: IBoard }>(),
    'Delete Board': props<{ boardId: string }>(),
    'Move Task': props<{ boardId: string; task: Task; sourceColumn: string; targetColumn: string; newIndex: number }>(),
    'Reorder Tasks': props<{ boardId: string; column: string; taskIds: string[] }>()
  }
});

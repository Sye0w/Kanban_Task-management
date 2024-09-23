import { createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { IBoard } from './kanban.model';
import { KanbanActions } from './kanban.actions';

export interface State extends EntityState<IBoard> {
  loading: boolean;
  error: any;
}

export const adapter: EntityAdapter<IBoard> = createEntityAdapter<IBoard>({
  selectId: (board: IBoard) => board?.name
});

export const initialState: State = adapter.getInitialState({
  loading: false,
  error: null
});

export const kanbanReducer = createReducer(
  initialState,
  on(KanbanActions.loadBoards, state => ({ ...state, loading: true })),
  on(KanbanActions.loadBoardsSuccess, (state, { boards }) =>
    adapter.setAll(boards, { ...state, loading: false })
  ),
  on(KanbanActions.loadBoardsFailure, (state, { error }) =>
    ({ ...state, loading: false, error })
  ),
  on(KanbanActions.createBoard, (state, { board }) =>
    adapter.addOne(board, state)
  ),
  on(KanbanActions.editBoard, (state, { board }) =>
    adapter.updateOne({ id: board.id, changes: board }, state)
  ),
  on(KanbanActions.deleteBoard, (state, { boardId }) =>
    adapter.removeOne(boardId, state)
  ),
  on(KanbanActions.moveTask,
    (state, { boardId, task, sourceColumn, targetColumn, newIndex }) => {
    const board = state.entities[boardId];
    if (!board) return state;

    const updatedColumns = board.columns.map(column => {
      if (column.name === sourceColumn) {
        return { ...column, tasks: column.tasks.filter(t => t.title !== task.title) };
      }
      if (column.name === targetColumn) {
        const newTasks = [...column.tasks];
        newTasks.splice(newIndex, 0, { ...task, status: targetColumn });
        return { ...column, tasks: newTasks };
      }
      return column;
    });

    return adapter.updateOne({
      id: boardId,
      changes: { columns: updatedColumns }
    }, state);
  }),
  on(KanbanActions.reorderTasks, (state, { boardId, column, taskIds }) => {
    const board = state.entities[boardId];
    if (!board) return state;

    const updatedColumns = board.columns.map(col => {
      if (col.name === column) {
        const reorderedTasks = taskIds.map(id => col.tasks.find(task => task.title === id)!);
        return { ...col, tasks: reorderedTasks };
      }
      return col;
    });

    return adapter.updateOne({
      id: boardId,
      changes: { columns: updatedColumns }
    }, state);
  })

);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

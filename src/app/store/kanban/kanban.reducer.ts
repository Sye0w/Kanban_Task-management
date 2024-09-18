import { createReducer, on } from '@ngrx/store';
import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as KanbanActions from './kanban.actions';
import { KanbanState, IBoard } from './kanban.model';

export const adapter: EntityAdapter<IBoard> = createEntityAdapter<IBoard>();

export const initialState: KanbanState = adapter.getInitialState({
  selectedBoardId: null,
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
  on(KanbanActions.addBoard, (state, { board }) =>
    adapter.addOne(board, state)
  ),
  on(KanbanActions.editBoard, (state, { board }) =>
    adapter.updateOne({ id: board.id, changes: board }, state)
  ),
  on(KanbanActions.deleteBoard, (state, { id }) =>
    adapter.removeOne(id, state)
  ),
  on(KanbanActions.selectBoard, (state, { id }) =>
    ({ ...state, selectedBoardId: id })
  )
);

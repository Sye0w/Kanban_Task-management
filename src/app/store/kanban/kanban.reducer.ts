import { createReducer, on } from '@ngrx/store';
import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import {  IBoard, State } from './kanban.model';
import { loadBoards, loadBoardsSuccess, loadBoardsFailure, addBoard, editBoard, deleteBoard, selectBoard } from './kanban.actions';

export const adapter: EntityAdapter<IBoard> = createEntityAdapter<IBoard>({
  selectId: board => board.name,
  sortComparer: (a, b) => a.name.localeCompare(b.name)
});

export const initialState: State = adapter.getInitialState({
  selectedBoardId: null,
  loading: false,
  error: null
});

export const kanbanReducer = createReducer(
  initialState,
  on(loadBoards, state => ({ ...state, loading: true })),
  on(loadBoardsSuccess, (state, { board }) =>
    adapter.setAll(board, state )
  ),
  on(loadBoardsFailure, (state, { error }) =>
    ({ ...state, loading: false, error })
  ),
  on(addBoard, (state, { board }) =>
    adapter.addOne(board, state)
  ),
  on(editBoard, (state, { board }) =>
    adapter.updateOne({ id: board.id, changes: board }, state)
  ),
  on(deleteBoard, (state, { id }) =>
    adapter.removeOne(id, state)
  ),
  on(selectBoard, (state, { id }) =>
    ({ ...state, selectedBoardId: id })
  )
);

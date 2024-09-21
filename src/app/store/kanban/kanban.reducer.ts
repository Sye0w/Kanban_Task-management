import { createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Board } from './kanban.model';
import * as KanbanActions from './kanban.actions';

export interface State extends EntityState<Board> {
  loading: boolean;
  error: any;
}

export const adapter: EntityAdapter<Board> = createEntityAdapter<Board>({
  selectId: (board: Board) => board.name
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
  )
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromKanban from './kanban.reducer';
import { selectBoardId } from '../router/router.selectors';

export const selectKanbanState = createFeatureSelector<fromKanban.State>('kanban');

export const selectAllBoards = createSelector(
  selectKanbanState,
  fromKanban.selectAll
);

export const selectBoardEntities = createSelector(
  selectKanbanState,
  fromKanban.selectEntities
);

export const getSelectedBoardId = createSelector(
  selectBoardEntities,
  selectBoardId,
  (boards, name) => name ? boards[name] : undefined
);

export const selectBoardByName = (name: string) => createSelector(
  selectBoardEntities,
  (boards) => boards[name]
);

export const selectKanbanLoading = createSelector(
  selectKanbanState,
  (state) => state.loading
);

export const selectKanbanError = createSelector(
  selectKanbanState,
  (state) => state.error
);

export const selectBoardsCount = createSelector(
  selectKanbanState,
  fromKanban.selectTotal
);

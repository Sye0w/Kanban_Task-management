import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KanbanState } from './kanban.model';
import * as fromKanban from './kanban.reducer';
import { getSelectedBoardId } from '../router/router.selectors';

export const selectKanbanState = createFeatureSelector<KanbanState>('kanban');


export const {
  selectIds: selectBoardIds,
  selectEntities: selectBoardEntities,
  selectAll: selectAllBoards,
  selectTotal: selectTotalBoards,
} = fromKanban.adapter.getSelectors(selectKanbanState);

export const selectSelectedBoard = createSelector(
  selectBoardEntities,
  getSelectedBoardId,
  (boardEntities, boardId) => boardId ? boardEntities[boardId] : null
);

export const selectKanbanLoading = createSelector(
  selectKanbanState,
  (state: KanbanState) => state.loading
);

export const selectKanbanError = createSelector(
  selectKanbanState,
  (state: KanbanState) => state.error
);

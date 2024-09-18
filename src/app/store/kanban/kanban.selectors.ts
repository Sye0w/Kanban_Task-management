import { adapter, KanbanState } from './kanban.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const selectKanbanBoards = createFeatureSelector<KanbanState>('boards')

export const { selectAll, selectEntities,
  selectIds,selectTotal } = adapter.getSelectors();

export const selectAllKanbanBoards = createSelector(
  selectKanbanBoards,
  selectAll
)

export const selectKanbanLoading = createSelector(
  selectKanbanBoards,
  (state: KanbanState) => state.loading
);

export const selectKanbanError = createSelector(
  selectKanbanBoards,
  (state: KanbanState) => state.error
);

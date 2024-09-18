import { createReducer,on } from "@ngrx/store";
import { adapter, initialState } from "./kanban.model";
import { loadKanban, loadKanbanFailure, loadKanbanSuccess } from "./kanban.actions";

export const KanbanBoardsReducer = createReducer(
  initialState,
  on( loadKanban, (state)=> ({
    ...state,
    loading: true
  })),
  on(loadKanbanSuccess, (state,{boards})=>
    adapter.setAll( boards,{
      ...state,
      loading: false,
      error: null
  })),
  on(loadKanbanFailure,(state,{error}) => ({
    ...state,
    loading: false,
    error: error.message || 'An error occurred'
  }))
);



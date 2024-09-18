import { getRouterSelectors, RouterReducerState } from "@ngrx/router-store";
import { createFeatureSelector } from "@ngrx/store";

export const selectRouterState = createFeatureSelector<RouterReducerState>('router');

const { selectRouteParam } = getRouterSelectors(selectRouterState);

export const getSelectedBoardId = selectRouteParam('boardId');

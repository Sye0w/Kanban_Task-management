import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, withLatestFrom } from 'rxjs/operators';
import * as KanbanActions from './kanban.actions';
import { KanbanFetchService } from '../../services/http-service/kanban-fetch.service';
import { Store } from '@ngrx/store';
import { selectAllBoards } from './kanban.selectors';

@Injectable()
export class KanbanEffects {
  loadBoards$ = createEffect(() =>
    this.actions$.pipe(
      ofType(KanbanActions.loadBoards),
      withLatestFrom(this.store.select(selectAllBoards)),
      mergeMap(([_, boards]) => {
        if (boards.length > 0) {
          return of(KanbanActions.loadBoardsSuccess({ boards }));
        } else {
          return this.kanbanService.fetchData().pipe(
            map(data => KanbanActions.loadBoardsSuccess({ boards: data.boards })),
            catchError(error => of(KanbanActions.loadBoardsFailure({ error })))
          );
        }
      })
    )
  );

  constructor(
    private actions$: Actions,
    private kanbanService: KanbanFetchService,
    private store: Store
  ) {}
}

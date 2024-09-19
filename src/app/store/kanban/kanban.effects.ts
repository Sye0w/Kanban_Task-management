import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as KanbanActions from './kanban.actions';
import { KanbanFetchService } from '../../services/http-service/kanban-fetch.service';


@Injectable()
export class KanbanEffects {
  loadBoards$ = createEffect(() =>
    this.actions$.pipe(
      ofType(KanbanActions.loadBoards),
      mergeMap(() => this.kanbanService.fetchData()
        .pipe(
          map(data => KanbanActions.loadBoardsSuccess({ boards: data.boards })),
          catchError(error => of(KanbanActions.loadBoardsFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private kanbanService: KanbanFetchService
  ) {}
}

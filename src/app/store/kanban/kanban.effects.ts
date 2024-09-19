import { switchMap, map, catchError, of, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { KanbanFetchService } from '../../services/http-service/kanban-fetch.service';
import { loadBoards, loadBoardsFailure, loadBoardsSuccess } from './kanban.actions';
import { IBoard, IBoardsData } from './kanban.model';

@Injectable()
export class kanbanEffects {
  fetchBoards$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadBoards),
      switchMap(() =>
        this.kanbanFetch.fetchData().pipe(
          // map((boards) => boards.boards ),
          // tap((data) => console.log(data)),
          map((bd:IBoardsData ) =>{
            console.log(bd.boards)
            let board = bd.boards
            return loadBoardsSuccess({board})
            }), // Ensure 'boards' is an array
          catchError((error) => of(loadBoardsFailure({ error: error.message })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private kanbanFetch: KanbanFetchService
  ) {}
}

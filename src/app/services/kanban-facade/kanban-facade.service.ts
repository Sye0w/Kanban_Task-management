import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as KanbanActions from '../../store/kanban/kanban.actions';
import * as KanbanSelectors from '../../store/kanban/kanban.selectors';
import { Board } from '../../store/kanban/kanban.model';


@Injectable({
  providedIn: 'root'
})
export class KanbanFacadeService {
  boards$: Observable<Board[]> = this.store.select(KanbanSelectors.selectAllBoards);
  selectedBoardId: Observable<Board | undefined> = this.store.select(KanbanSelectors.getSelectedBoardId)
  loading$: Observable<boolean> = this.store.select(KanbanSelectors.selectKanbanLoading);
  error$: Observable<any> = this.store.select(KanbanSelectors.selectKanbanError);
  boardsCount$: Observable<number> = this.store.select(KanbanSelectors.selectBoardsCount);

  constructor(private store: Store) {
    this.selectedBoardId.subscribe(boardsCount => console.log('board columns' + boardsCount?.columns));
  }

  loadBoards() {
    this.store.dispatch(KanbanActions.loadBoards());
  }

  getBoardByName(name: string): Observable<Board | undefined> {
    return this.store.select(KanbanSelectors.selectBoardByName(name));
  }

  getBoardsCount(): Observable<number> {
    return this.boardsCount$;
  }
}

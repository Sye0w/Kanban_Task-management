import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { KanbanActions } from '../../store/kanban/kanban.actions';
import * as KanbanSelectors from '../../store/kanban/kanban.selectors';
import { IBoard } from '../../store/kanban/kanban.model';

@Injectable({
  providedIn: 'root'
})
export class KanbanFacadeService {
  boards$: Observable<IBoard[]> = this.store.select(KanbanSelectors.selectAllBoards);
  selectedBoardId$: Observable<IBoard | undefined> = this.store.select(KanbanSelectors.getSelectedBoardId)
  loading$: Observable<boolean> = this.store.select(KanbanSelectors.selectKanbanLoading);
  error$: Observable<any> = this.store.select(KanbanSelectors.selectKanbanError);
  boardsCount$: Observable<number> = this.store.select(KanbanSelectors.selectBoardsCount);

  constructor(private store: Store) {}

  loadBoards() {
    this.store.dispatch(KanbanActions.loadBoards());
  }

  getBoardByName(name: string): Observable<IBoard | undefined> {
    return this.store.select(KanbanSelectors.selectBoardByName(name));
  }

  getBoardsCount(): Observable<number> {
    return this.boardsCount$;
  }

  createBoard(board: IBoard) {
    this.store.dispatch(KanbanActions.createBoard({ board }));
  }

  editBoard(board: IBoard) {
    this.store.dispatch(KanbanActions.editBoard({ board }));
  }

  deleteBoard(board: IBoard) {
    console.log('Deleting board dispatched');

    this.store.dispatch(KanbanActions.deleteBoard({ boardId: board.id }));
  }
}

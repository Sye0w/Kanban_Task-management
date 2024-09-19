import { Injectable } from '@angular/core';
import * as KanbanActions from '../../store/kanban/kanban.actions';
import { selectAllBoards } from '../../store/kanban/kanban.selectors';
import { IBoard, State } from '../../store/kanban/kanban.model';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class KanbanFacadeService {
  constructor(private store: Store<State>) {}

  kanbanBoards$ = this.store.select(selectAllBoards);

  loadKanban() {
    this.store.dispatch(KanbanActions.loadBoards());
  }
}

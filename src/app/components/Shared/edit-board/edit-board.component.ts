import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalService } from '../../../services/modal/modal.service';
import { KanbanFacadeService } from '../../../services/kanban-facade/kanban-facade.service';
import { CommonModule } from '@angular/common';
import { Board, Column } from '../../../store/kanban/kanban.model';
import { FormsModule } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-board',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-board.component.html',
  styleUrl: '../shared.component.scss'
})
export class EditBoardComponent implements OnInit, OnDestroy {
  modalActive: boolean = false;
  selectedBoard$: Observable<Board | undefined>;
  editedBoard: Board | undefined;
  private subscription: Subscription = new Subscription();

  constructor(
    private modalService: ModalService,
    private kanbanFacade: KanbanFacadeService
  ) {
    this.selectedBoard$ = this.kanbanFacade.selectedBoardId$;
  }

  ngOnInit() {
    this.subscription.add(
      this.modalService.editBoardActive$.subscribe(active => this.modalActive = active)
    );

    this.subscription.add(
      this.selectedBoard$.subscribe(board => {
        if (board) {
          this.editedBoard = JSON.parse(JSON.stringify(board)); // Create a deep copy
        }
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  addColumn() {
    if (this.editedBoard) {
      const newColumn: Column = { name: '', tasks: [] };
      this.editedBoard = {
        ...this.editedBoard,
        columns: [...this.editedBoard.columns, newColumn]
      };
    }
  }

  removeColumn(index: number) {
    if (this.editedBoard && this.editedBoard.columns.length > 1) {
      this.editedBoard = {
        ...this.editedBoard,
        columns: this.editedBoard.columns.filter((_, i) => i !== index)
      };
    }
  }

  onSubmit() {
    if (this.editedBoard && this.isFormValid()) {
      this.kanbanFacade.editBoard(this.editedBoard);
      this.toggleModal();
    }
  }

  isFormValid(): boolean {
    return this.editedBoard !== undefined &&
      this.editedBoard.name.trim() !== '' &&
      this.editedBoard.columns.every(column => column.name.trim() !== '');
  }

  toggleModal() {
    this.modalService.toggleEditBoard();
  }

  active() {
    return {
      'show': this.modalActive
    };
  }

  updateBoardName(name: string) {
    if (this.editedBoard) {
      this.editedBoard = { ...this.editedBoard, name };
    }
  }

  updateColumnName(index: number, name: string) {
    if (this.editedBoard) {
      const updatedColumns = [...this.editedBoard.columns];
      updatedColumns[index] = { ...updatedColumns[index], name };
      this.editedBoard = { ...this.editedBoard, columns: updatedColumns };
    }
  }
}
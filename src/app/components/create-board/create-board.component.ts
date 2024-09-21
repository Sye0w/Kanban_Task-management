import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { ModalService } from '../../services/modal/modal.service';
import { KanbanFacadeService } from '../../services/kanban-facade/kanban-facade.service';
import { Board,Column } from '../../store/kanban/kanban.model';

@Component({
  selector: 'app-create-board',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-board.component.html',
  styleUrl: './create-board.component.scss'
})
export class CreateBoardComponent implements OnInit {
  modalActive: boolean = false;
  board: Omit<Board, 'id'> = {
    name: '',
    columns: [
      {
        name: 'Todo',
        tasks: [],
      },
      {
        name: 'Doing',
        tasks: [],
      }
    ]
  }

  constructor(
    private modalService: ModalService,
    private kanbanFacade: KanbanFacadeService
  ) {}

  ngOnInit() {
    this.modalService.createBoardActive$.subscribe(active => this.modalActive = active);
  }

  addColumn() {
    this.board.columns.push({
      name: '',
      tasks: [],
    });
  }

  removeColumn(index: number) {
    if (this.board.columns.length > 1) {
      this.board.columns.splice(index, 1);
    }
  }

  toggleModal() {
    this.modalService.toggleCreateBoard();
  }

  active() {
    return {
      'show': this.modalActive
    };
  }

  isFormValid() {
    return this.board.name.trim() !== '' &&
    this.board.columns.every(column => column.name.trim() !== '');
  }

  onSubmit() {
    if (this.isFormValid()) {
      const newBoard: Board = {
        ...this.board,
        id: uuidv4()
      };
      this.kanbanFacade.createBoard(newBoard);
      this.toggleModal();
      this.resetForm();
    }
  }

  resetForm() {
    this.board = {
      name: '',
      columns: [
        {
          name: 'Todo',
          tasks: []
        },
        {
          name: 'Doing',
          tasks: []
        }
      ]
    };
  }
}

import { Component } from '@angular/core';
import { KanbanFacadeService } from '../../services/kanban-facade/kanban-facade.service';
import { ModalService } from '../../services/modal/modal.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar-list',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './sidebar-list.component.html',
  styleUrl: './sidebar-list.component.scss'
})

export class SidebarListComponent {
  boardsCount$ = this.kanbanFacade.boardsCount$;
  boards$ = this.kanbanFacade.boards$;
  selectedBoard!: string | undefined;

  constructor(
    private modalService: ModalService,
    private kanbanFacade: KanbanFacadeService
  ) {}

  ngOnInit() {
    this.kanbanFacade.loadBoards();
    this.kanbanFacade.selectedBoardId$.subscribe(
      (board) => (this.selectedBoard = board?.name)
    );
  }

  trackSelectedBoard(name: string | undefined): { [key: string]: boolean } {
    return {
      'selected-board': name === this.selectedBoard,
    };
  }

  toggleCraeteBoard() {
    this.modalService.toggleCreateBoard();
  }
}

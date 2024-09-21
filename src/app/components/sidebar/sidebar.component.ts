import { Component, Input, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LogoComponent } from '../logo/logo.component';
import { ModalService } from '../../services/modal/modal.service';
import { KanbanFacadeService } from '../../services/kanban-facade/kanban-facade.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CreateBoardComponent } from '../Shared/create-board/create-board.component';
import { SidebarSettingsComponent } from '../sidebar-settings/sidebar-settings.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    MatSidenavModule,
    LogoComponent,
    CommonModule,
    RouterModule,
    CreateBoardComponent,
    SidebarSettingsComponent,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {
  @Input() opened!: boolean;
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

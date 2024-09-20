import { Component, Input } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LogoComponent } from '../logo/logo.component';
import { ModalService } from '../../services/modal/modal.service';
import { KanbanFacadeService } from '../../services/kanban-facade/kanban-facade.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatSidenavModule, LogoComponent, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  @Input() opened!: boolean;
  boardsCount$ = this.kanbanFacade.boardsCount$;
  boards$ = this.kanbanFacade.boards$;

  constructor(
    private modalService: ModalService,
    private kanbanFacade: KanbanFacadeService
  ) {}

  ngOnInit() {
    this.kanbanFacade.loadBoards();
  }

  toggleSidenav() {
    this.modalService.toggleSidebar();
  }
}

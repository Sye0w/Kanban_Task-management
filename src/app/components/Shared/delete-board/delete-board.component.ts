import { IBoard } from './../../../store/kanban/kanban.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalService } from '../../../services/modal/modal.service';
import { CommonModule } from '@angular/common';
import { KanbanFacadeService } from '../../../services/kanban-facade/kanban-facade.service';
import { Subscription } from 'rxjs';
import { ThemeService } from '../../../services/theme/theme.service';

@Component({
  selector: 'app-delete-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-board.component.html',
  styleUrl: '../shared.component.scss'
})
export class DeleteBoardComponent implements OnInit, OnDestroy {
  modalActive: boolean = false;
  board: IBoard | undefined;
  private subscriptions: Subscription[] = [];
  theme: boolean = false;

  constructor(
    private modalService: ModalService,
    private kanbanFacade: KanbanFacadeService,
    private themeService: ThemeService
  ) {}

  ngOnInit() {
    this.subscriptions.push(
      this.modalService.deleteBoardActive$.subscribe(active => this.modalActive = active),
      this.kanbanFacade.selectedBoardId$.subscribe(board => this.board = board),
      this.themeService.theme$.subscribe(theme => this.theme = theme)
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  toggleDeleteBoard() {
    this.modalService.toggleDeleteBoard();
  }

  deleteBoard() {
    if (this.board) {
      this.kanbanFacade.deleteBoard(this.board);
      this.toggleDeleteBoard();
    } else {
      console.error('Cannot delete board: No board selected');
    }
  }

  get boardName(): string {
    return this.board?.name ?? 'Unknown';
  }
}

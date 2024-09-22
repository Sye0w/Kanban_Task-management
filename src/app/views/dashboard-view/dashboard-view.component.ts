import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { IBoard } from '../../store/kanban/kanban.model';
import { KanbanFacadeService } from '../../services/kanban-facade/kanban-facade.service';
import { CommonModule } from '@angular/common';
import { ColumnsComponent } from "../../components/columns/columns.component";

@Component({
  selector: 'app-dashboard-view',
  standalone: true,
  imports: [CommonModule, ColumnsComponent],
  templateUrl: './dashboard-view.component.html',
  styleUrl: './dashboard-view.component.scss'
})

export class DashboardViewComponent {
  @Input() selectedBoard$ = this.kanbanFacade.selectedBoardId$;

  constructor(private kanbanFacade: KanbanFacadeService) {}


}

import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Board } from '../../store/kanban/kanban.model';
import { KanbanFacadeService } from '../../services/kanban-facade/kanban-facade.service';

@Component({
  selector: 'app-dashboard-view',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-view.component.html',
  styleUrl: './dashboard-view.component.scss'
})

export class DashboardViewComponent {
  selectedBoard$ = this.kanbanFacade.selectedBoardId$
  constructor(private kanbanFacade: KanbanFacadeService){}

}

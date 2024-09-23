import { Component, Input, OnInit } from '@angular/core';
import { KanbanFacadeService } from '../../services/kanban-facade/kanban-facade.service';
import { CommonModule } from '@angular/common';
import { ColumnsComponent } from "../../components/columns/columns.component";
import { ThemeService } from '../../services/theme/theme.service';

@Component({
  selector: 'app-dashboard-view',
  standalone: true,
  imports: [CommonModule, ColumnsComponent],
  templateUrl: './dashboard-view.component.html',
  styleUrl: './dashboard-view.component.scss'
})

export class DashboardViewComponent {
  @Input() selectedBoard$ = this.kanbanFacade.selectedBoardId$;
  theme: boolean = false;

  constructor(private kanbanFacade: KanbanFacadeService,
    private themeService: ThemeService) {}



}

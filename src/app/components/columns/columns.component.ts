import { Component, Input } from '@angular/core';
import { KanbanFacadeService } from '../../services/kanban-facade/kanban-facade.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-columns',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './columns.component.html',
  styleUrl: './columns.component.scss'
})


export class ColumnsComponent {
  @Input() selectedBoard$ = this.kanbanFacade.selectedBoardId$;

  constructor(private kanbanFacade: KanbanFacadeService) {}

  private columnColors: Record<string, string> = {}

  private colorMap : Record<string, string> = {
    'Todo': '#49C4E5',
    'Doing': '#8471F2',
    'Done': '#67E2AE'
  }

  getColumnColors(name: string): string {
    if(!this.columnColors[name]){
      this.columnColors[name] = this.colorMap[name] || this.randomColors()
    }
    return this.columnColors[name];
  }

  private randomColors(): string{
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  }
}

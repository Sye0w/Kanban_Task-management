import { Component, ElementRef, Input, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { KanbanFacadeService } from '../../services/kanban-facade/kanban-facade.service';
import { IBoard, Task } from '../../store/kanban/kanban.model';
import { ThemeService } from '../../services/theme/theme.service';
import anime from 'animejs/lib/anime.es.js';
@Component({
  selector: 'app-columns',
  standalone: true,
  imports: [CommonModule, DragDropModule],
  templateUrl: './columns.component.html',
  styleUrl: './columns.component.scss'
})
export class ColumnsComponent {
  @Input() selectedBoard$ = this.kanbanFacade.selectedBoardId$;
  theme: boolean = false;

  constructor(private kanbanFacade: KanbanFacadeService,
    private themeService: ThemeService,
  ) {}



  private columnColors: Record<string, string> = {}

  private colorMap: Record<string, string> = {
    'Todo': '#49C4E5',
    'Doing': '#8471F2',
    'Done': '#67E2AE'
  }

  ngOnInit(){
    this.themeService.theme$.subscribe( theme => this.theme = theme)
  }

  getColumnColors(name: string): string {
    if (!this.columnColors[name]) {
      this.columnColors[name] = this.colorMap[name] || this.randomColors()
    }
    return this.columnColors[name];
  }

  private randomColors(): string {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  }

  drop(event: CdkDragDrop<Task[]>, board: IBoard) {
    if (event.previousContainer === event.container) {
      // Reordering within the same column
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      this.kanbanFacade.reorderTasks(board.id, event.container.id,
        event.previousIndex, event.currentIndex);
    } else {
      // Moving between columns
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      const task = event.container.data[event.currentIndex];
      this.kanbanFacade.moveTask(board.id, task,
        event.previousContainer.id, event.container.id, event.currentIndex);
    }
  }

  getConnectedLists(board: IBoard): string[] {
    return board.columns.map(column => column.name);
  }

  trackByColumnName(index: number, column: { name: string }): string {
    return column.name;
  }

  trackByTaskTitle(index: number, task: { title: string }): string {
    return task.title;
  }
}

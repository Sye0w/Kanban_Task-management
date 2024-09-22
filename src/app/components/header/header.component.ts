import { Component } from '@angular/core';
import { HeaderSettingsComponent } from "../header-settings/header-settings.component";
import { AddTaskComponent } from "../add-task/add-task.component";
import { LogoComponent } from "../logo/logo.component";
import { KanbanFacadeService } from '../../services/kanban-facade/kanban-facade.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderSettingsComponent, AddTaskComponent, LogoComponent,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  board$ = this.kanbanFacade.selectedBoardId$

  constructor(private kanbanFacade: KanbanFacadeService){}

  ngOnInit(){

  }

}

import { Component } from '@angular/core';
import { KanbanFacadeService } from '../../services/kanban-facade/kanban-facade.service';
import { ModalService } from '../../services/modal/modal.service';
import { ThemeService } from '../../services/theme/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar-settings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar-settings.component.html',
  styleUrl: './sidebar-settings.component.scss'
})
export class SidebarSettingsComponent {
  theme: boolean = false;

  constructor(
    private modalService: ModalService,
    private kanbanFacade: KanbanFacadeService,
    private themeService: ThemeService,
  ) {}

  ngOnInit(){
    this.themeService.theme$.subscribe(theme => this.theme = theme);
  }

  toggleSidenav() {
    this.modalService.toggleSidebar();
  }

  toggleTheme() {
   this.themeService.toggleTheme()
  }
}

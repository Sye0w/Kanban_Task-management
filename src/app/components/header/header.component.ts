import { Component, OnInit } from '@angular/core';
import { HeaderSettingsComponent } from "../header-settings/header-settings.component";
import { AddTaskComponent } from "../add-task/add-task.component";
import { LogoComponent } from "../logo/logo.component";
import { KanbanFacadeService } from '../../services/kanban-facade/kanban-facade.service';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../services/modal/modal.service';
import { Observable } from 'rxjs';
import { MobileNavComponent } from "../mobile-nav/mobile-nav.component";
import { ThemeService } from '../../services/theme/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderSettingsComponent, AddTaskComponent, LogoComponent, CommonModule, MobileNavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  board$ = this.kanbanFacade.selectedBoardId$;
  mobileNavActive$!: Observable<boolean>;
  theme: boolean = false;

  constructor(
    private kanbanFacade: KanbanFacadeService,
    private modalService: ModalService,
    private themeService: ThemeService
  ) {}

  ngOnInit() {
    this.mobileNavActive$ = this.modalService.mobileNavActive$;
    this.themeService.theme$.subscribe(theme => this.theme = theme);
  }

  toggleNav() {
    this.modalService.toggleMobileNav();
  }
}

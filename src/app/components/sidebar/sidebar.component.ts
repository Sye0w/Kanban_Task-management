import { Component, Input } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LogoComponent } from '../logo/logo.component';
import { ModalService } from '../../services/modal/modal.service';
import { KanbanFacadeService } from '../../services/kanban-facade/kanban-facade.service';
import { CommonModule } from '@angular/common';
import { CreateBoardComponent } from '../Shared/create-board/create-board.component';
import { SidebarSettingsComponent } from '../sidebar-settings/sidebar-settings.component';
import { SidebarListComponent } from "../sidebar-list/sidebar-list.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    MatSidenavModule,
    LogoComponent,
    CommonModule,
    CreateBoardComponent,
    SidebarSettingsComponent,
    SidebarListComponent
],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  @Input() opened!: boolean;


  constructor(
      ) {}






}

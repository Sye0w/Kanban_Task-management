import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { HeaderComponent } from "./components/header/header.component";
import { MatSidenavModule } from '@angular/material/sidenav';
import { ModalService } from './services/modal/modal.service';
import { ThemeService } from './services/theme/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet, SidebarComponent, HeaderComponent, MatSidenavModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit{
  title = 'Kanban_Task_management';
  theme: boolean = false;
  sidebarOpened!: boolean;

  constructor(private modalService: ModalService,
    private themeService: ThemeService
  ){}

  ngOnInit(){
    this.modalService.sidebarActive$.subscribe(
      (active) => this.sidebarOpened = active
    )
    this.themeService.theme$.subscribe( theme => this.theme = theme );
  }

  toggleSidebar() {
    this.modalService.toggleSidebar();
  }
}

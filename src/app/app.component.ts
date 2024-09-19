import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { HeaderComponent } from "./components/header/header.component";
import { MatSidenavModule } from '@angular/material/sidenav';
import { ModalService } from './services/modal/modal.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, HeaderComponent, MatSidenavModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit{
  title = 'Kanban_Task_management';
  sidebarOpened!: boolean;

  constructor(private modalService: ModalService){}

  ngOnInit(){
    this.modalService.sidebarActive.subscribe(
      (active) => this.sidebarOpened = active
    )
  }

  toggleSidebar() {
    this.modalService.toggleSidebar();
  }
}

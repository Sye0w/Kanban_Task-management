import { Component, Input } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LogoComponent } from "../logo/logo.component";
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatSidenavModule, LogoComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})

export class SidebarComponent {
  @Input() opened!: boolean;

  constructor(private modalService: ModalService) { }


  toggleSidenav() {
    this.modalService.toggleSidebar();
  }
}

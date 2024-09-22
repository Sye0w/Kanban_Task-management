import { Component } from '@angular/core';
import { ModalService } from '../../services/modal/modal.service';
import { SidebarListComponent } from "../sidebar-list/sidebar-list.component";

@Component({
  selector: 'app-mobile-nav',
  standalone: true,
  imports: [SidebarListComponent],
  templateUrl: './mobile-nav.component.html',
  styleUrl: './mobile-nav.component.scss'
})

export class MobileNavComponent {
  mobileNavActive!: boolean;

  constructor(private modalService: ModalService ){}

  ngOnInit(){
    this.modalService.mobileNavActive$.subscribe(
      active => this.mobileNavActive = active
    )
  }

  toggleMobileNav() {
    this.modalService.toggleMobileNav();
  }
}

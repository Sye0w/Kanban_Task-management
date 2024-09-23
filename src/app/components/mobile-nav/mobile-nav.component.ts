import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ModalService } from '../../services/modal/modal.service';
import { SidebarListComponent } from "../sidebar-list/sidebar-list.component";
import { SidebarSettingsComponent } from "../sidebar-settings/sidebar-settings.component";
import { ThemeService } from '../../services/theme/theme.service';

@Component({
  selector: 'app-mobile-nav',
  standalone: true,
  imports: [CommonModule,SidebarListComponent, SidebarSettingsComponent],
  templateUrl: './mobile-nav.component.html',
  styleUrl: './mobile-nav.component.scss'
})

export class MobileNavComponent {
  mobileNavActive!: boolean;
  theme : boolean = false;

  constructor(private modalService: ModalService,
    private themeService : ThemeService
   ){}

  ngOnInit(){
    this.modalService.mobileNavActive$.subscribe(
      active => this.mobileNavActive = active
    )

    this.themeService.theme$.subscribe( theme => this.theme = theme)
  }

  toggleMobileNav() {
    this.modalService.toggleMobileNav();
  }
}

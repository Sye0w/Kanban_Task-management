import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header-settings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-settings.component.html',
  styleUrl: './header-settings.component.scss'
})

export class HeaderSettingsComponent {
  popup: boolean = false;


  togglePopup(){
    this.popup =!this.popup;
  }
}

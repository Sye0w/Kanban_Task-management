import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ModalService } from '../../services/modal/modal.service';
import { EditBoardComponent } from "../Shared/edit-board/edit-board.component";

@Component({
  selector: 'app-header-settings',
  standalone: true,
  imports: [CommonModule, EditBoardComponent],
  templateUrl: './header-settings.component.html',
  styleUrl: './header-settings.component.scss'
})

export class HeaderSettingsComponent {
  popup: boolean = false;

  constructor(private modalService: ModalService){} 

  togglePopup(){
    this.popup =!this.popup;
  }

  toggleEditModal(){
    this.modalService.toggleEditBoard()
  }
}

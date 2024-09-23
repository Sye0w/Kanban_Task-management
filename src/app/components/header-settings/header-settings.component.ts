import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ModalService } from '../../services/modal/modal.service';
import { EditBoardComponent } from "../Shared/edit-board/edit-board.component";
import { DeleteBoardComponent } from "../Shared/delete-board/delete-board.component";
import { ThemeService } from '../../services/theme/theme.service';

@Component({
  selector: 'app-header-settings',
  standalone: true,
  imports: [CommonModule, EditBoardComponent, DeleteBoardComponent],
  templateUrl: './header-settings.component.html',
  styleUrl: './header-settings.component.scss'
})

export class HeaderSettingsComponent {
  popup: boolean = false;
  theme:boolean = false;

  constructor(private modalService: ModalService,
    private themeService: ThemeService
  ){}

  ngOnInit(){
    this.themeService.theme$.subscribe(theme => this.theme = theme)
  }

  togglePopup(){
    this.popup =!this.popup;
  }

  toggleEditModal(){
    this.modalService.toggleEditBoard()
  }

  toggleDeleteBoard(){
    this.modalService.toggleDeleteBoard()
  }
}

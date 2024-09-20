import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal/modal.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-board',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-board.component.html',
  styleUrl: './create-board.component.scss'
})
export class CreateBoardComponent implements OnInit {
  modalActive: boolean = false;
  board = {
    name: '',
    columns: [
      { title: 'Todo' },
      { title: 'Doing' }
    ]
  }

  constructor(
    private modalService: ModalService,
  ) {}

  ngOnInit() {
    this.modalService.createBoardActive$.subscribe(active => this.modalActive = active);

  }



  addColumn() {
    this.board.columns.push({title: ''});
  }

  removeColumn(index: number) {
    if (this.board.columns.length > 1) {
      this.board.columns.splice(index, 1);
    }
  }

  toggleModal() {
    this.modalService.toggleCreateBoard();
  }

  active() {
    return {
      'show': this.modalActive
    };
  }

  onSubmit() {
    // if (this.isFormValid()) {
    //   console.log('Board created:', this.board);
    //   this.toggleModal();
    // }
  }

  isFormValid() {
    return this.board.name.trim() !== '' &&
    this.board.columns.every(column => column.title.trim() !== '');
  }
}

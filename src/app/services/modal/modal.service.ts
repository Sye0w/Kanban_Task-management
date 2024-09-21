import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private sidebarSubject = new BehaviorSubject<boolean>(false);
  sidebarActive$ = this.sidebarSubject.asObservable();
  private createBoardSubject = new BehaviorSubject<boolean>(false);
  createBoardActive$ = this.createBoardSubject.asObservable();
  private editBoardSubject = new BehaviorSubject<boolean>(true);
  editBoardActive$ = this.editBoardSubject.asObservable();

  constructor() { }

  toggleSidebar() {
    this.sidebarSubject.next(!this.sidebarSubject.value);
  }

  toggleCreateBoard() {
    this.createBoardSubject.next(!this.createBoardSubject.value);
  }

  toggleEditBoard() {
    this.editBoardSubject.next(!this.editBoardSubject.value);
  }
}

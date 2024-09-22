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
  private editBoardSubject = new BehaviorSubject<boolean>(false);
  editBoardActive$ = this.editBoardSubject.asObservable();
  private deleteBoardSubject = new BehaviorSubject<boolean>(false);
  deleteBoardActive$ = this.deleteBoardSubject.asObservable();
  private mobileNavSubject = new BehaviorSubject<boolean>(false);
  mobileNavActive$ = this.mobileNavSubject.asObservable();

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

  toggleDeleteBoard() {
    this.deleteBoardSubject.next(!this.deleteBoardSubject.value);
  }

  toggleMobileNav() {
    console.log('mobile nav toggled');
    this.mobileNavSubject.next(!this.mobileNavSubject.value);
  }
}

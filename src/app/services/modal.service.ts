import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private sidebarSubject = new BehaviorSubject<boolean>(false);
  sidebarActive = this.sidebarSubject.asObservable()

  constructor() { }

  toggleSidebar() {
    this.sidebarSubject.next(!this.sidebarSubject.value);
  }
}

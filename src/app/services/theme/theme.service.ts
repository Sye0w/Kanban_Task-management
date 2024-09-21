import { Injectable } from '@angular/core';
import { selectTheme } from '../../store/theme/theme.selectors';
import { Store } from '@ngrx/store';
import { switchTheme } from '../../store/theme/theme.actions';

@Injectable({
  providedIn: 'root'
})

export class ThemeService {
  theme$ =  this.store.select(selectTheme);
  constructor( private store: Store) { }

  toggleTheme() {
    this.store.dispatch(switchTheme());
  }
}

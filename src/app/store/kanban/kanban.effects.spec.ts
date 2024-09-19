import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { KanbanEffects } from './kanban.effects';

describe('KanbanEffects', () => {
  let actions$: Observable<any>;
  let effects: KanbanEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        KanbanEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(KanbanEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

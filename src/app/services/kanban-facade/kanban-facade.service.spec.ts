import { TestBed } from '@angular/core/testing';

import { KanbanFacadeService } from './kanban-facade.service';

describe('KanbanFacadeService', () => {
  let service: KanbanFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KanbanFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

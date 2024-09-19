import { TestBed } from '@angular/core/testing';

import { KanbanFetchService } from './kanban-fetch.service';

describe('KanbanFetchService', () => {
  let service: KanbanFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KanbanFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

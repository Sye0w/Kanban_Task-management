import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBoardComponent } from './delete-board.component';

describe('DeleteBoardComponent', () => {
  let component: DeleteBoardComponent;
  let fixture: ComponentFixture<DeleteBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteBoardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

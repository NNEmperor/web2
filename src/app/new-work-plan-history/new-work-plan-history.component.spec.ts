import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWorkPlanHistoryComponent } from './new-work-plan-history.component';

describe('NewWorkPlanHistoryComponent', () => {
  let component: NewWorkPlanHistoryComponent;
  let fixture: ComponentFixture<NewWorkPlanHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewWorkPlanHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewWorkPlanHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

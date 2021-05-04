import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWorkPlanInstructionsComponent } from './new-work-plan-instructions.component';

describe('NewWorkPlanInstructionsComponent', () => {
  let component: NewWorkPlanInstructionsComponent;
  let fixture: ComponentFixture<NewWorkPlanInstructionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewWorkPlanInstructionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewWorkPlanInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

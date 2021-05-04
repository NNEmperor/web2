import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWorkPlanComponent } from './new-work-plan.component';

describe('NewWorkPlanComponent', () => {
  let component: NewWorkPlanComponent;
  let fixture: ComponentFixture<NewWorkPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewWorkPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewWorkPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

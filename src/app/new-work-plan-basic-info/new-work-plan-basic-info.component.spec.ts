import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWorkPlanBasicInfoComponent } from './new-work-plan-basic-info.component';

describe('NewWorkPlanBasicInfoComponent', () => {
  let component: NewWorkPlanBasicInfoComponent;
  let fixture: ComponentFixture<NewWorkPlanBasicInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewWorkPlanBasicInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewWorkPlanBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWorkPlanMultimediaComponent } from './new-work-plan-multimedia.component';

describe('NewWorkPlanMultimediaComponent', () => {
  let component: NewWorkPlanMultimediaComponent;
  let fixture: ComponentFixture<NewWorkPlanMultimediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewWorkPlanMultimediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewWorkPlanMultimediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

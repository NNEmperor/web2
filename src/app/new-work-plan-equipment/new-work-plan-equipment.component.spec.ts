import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWorkPlanEquipmentComponent } from './new-work-plan-equipment.component';

describe('NewWorkPlanEquipmentComponent', () => {
  let component: NewWorkPlanEquipmentComponent;
  let fixture: ComponentFixture<NewWorkPlanEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewWorkPlanEquipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewWorkPlanEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

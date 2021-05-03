import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkreqEquipmentComponent } from './workreq-equipment.component';

describe('WorkreqEquipmentComponent', () => {
  let component: WorkreqEquipmentComponent;
  let fixture: ComponentFixture<WorkreqEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkreqEquipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkreqEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewIncidentEquipmentComponent } from './new-incident-equipment.component';

describe('NewIncidentEquipmentComponent', () => {
  let component: NewIncidentEquipmentComponent;
  let fixture: ComponentFixture<NewIncidentEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewIncidentEquipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewIncidentEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSafetyDocsEquipmentComponent } from './new-safety-docs-equipment.component';

describe('NewSafetyDocsEquipmentComponent', () => {
  let component: NewSafetyDocsEquipmentComponent;
  let fixture: ComponentFixture<NewSafetyDocsEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSafetyDocsEquipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSafetyDocsEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

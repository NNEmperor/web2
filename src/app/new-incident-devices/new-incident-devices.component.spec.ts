import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewIncidentDevicesComponent } from './new-incident-devices.component';

describe('NewIncidentDevicesComponent', () => {
  let component: NewIncidentDevicesComponent;
  let fixture: ComponentFixture<NewIncidentDevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewIncidentDevicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewIncidentDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

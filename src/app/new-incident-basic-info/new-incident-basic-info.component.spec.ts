import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewIncidentBasicInfoComponent } from './new-incident-basic-info.component';

describe('NewIncidentBasicInfoComponent', () => {
  let component: NewIncidentBasicInfoComponent;
  let fixture: ComponentFixture<NewIncidentBasicInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewIncidentBasicInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewIncidentBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

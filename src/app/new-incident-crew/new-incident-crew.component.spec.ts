import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewIncidentCrewComponent } from './new-incident-crew.component';

describe('NewIncidentCrewComponent', () => {
  let component: NewIncidentCrewComponent;
  let fixture: ComponentFixture<NewIncidentCrewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewIncidentCrewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewIncidentCrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

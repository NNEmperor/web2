import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewIncidentCallsComponent } from './new-incident-calls.component';

describe('NewIncidentCallsComponent', () => {
  let component: NewIncidentCallsComponent;
  let fixture: ComponentFixture<NewIncidentCallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewIncidentCallsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewIncidentCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

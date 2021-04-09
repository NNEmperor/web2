import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewIncidentNewCallsComponent } from './new-incident-new-calls.component';

describe('NewIncidentNewCallsComponent', () => {
  let component: NewIncidentNewCallsComponent;
  let fixture: ComponentFixture<NewIncidentNewCallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewIncidentNewCallsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewIncidentNewCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

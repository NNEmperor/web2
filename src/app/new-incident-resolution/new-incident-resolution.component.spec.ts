import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewIncidentResolutionComponent } from './new-incident-resolution.component';

describe('NewIncidentResolutionComponent', () => {
  let component: NewIncidentResolutionComponent;
  let fixture: ComponentFixture<NewIncidentResolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewIncidentResolutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewIncidentResolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

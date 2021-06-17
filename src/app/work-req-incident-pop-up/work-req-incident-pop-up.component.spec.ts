import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkReqIncidentPopUpComponent } from './work-req-incident-pop-up.component';

describe('WorkReqIncidentPopUpComponent', () => {
  let component: WorkReqIncidentPopUpComponent;
  let fixture: ComponentFixture<WorkReqIncidentPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkReqIncidentPopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkReqIncidentPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

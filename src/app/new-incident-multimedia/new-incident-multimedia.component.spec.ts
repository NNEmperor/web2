import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewIncidentMultimediaComponent } from './new-incident-multimedia.component';

describe('NewIncidentMultimediaComponent', () => {
  let component: NewIncidentMultimediaComponent;
  let fixture: ComponentFixture<NewIncidentMultimediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewIncidentMultimediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewIncidentMultimediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

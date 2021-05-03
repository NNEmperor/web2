import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkreqMultimediaComponent } from './workreq-multimedia.component';

describe('WorkreqMultimediaComponent', () => {
  let component: WorkreqMultimediaComponent;
  let fixture: ComponentFixture<WorkreqMultimediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkreqMultimediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkreqMultimediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

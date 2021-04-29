import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSafetyDocsMultimediaComponent } from './new-safety-docs-multimedia.component';

describe('NewSafetyDocsMultimediaComponent', () => {
  let component: NewSafetyDocsMultimediaComponent;
  let fixture: ComponentFixture<NewSafetyDocsMultimediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSafetyDocsMultimediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSafetyDocsMultimediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSafetyDocsComponent } from './new-safety-docs.component';

describe('NewSafetyDocsComponent', () => {
  let component: NewSafetyDocsComponent;
  let fixture: ComponentFixture<NewSafetyDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSafetyDocsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSafetyDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

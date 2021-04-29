import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSafetyDocsChecklistComponent } from './new-safety-docs-checklist.component';

describe('NewSafetyDocsChecklistComponent', () => {
  let component: NewSafetyDocsChecklistComponent;
  let fixture: ComponentFixture<NewSafetyDocsChecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSafetyDocsChecklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSafetyDocsChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

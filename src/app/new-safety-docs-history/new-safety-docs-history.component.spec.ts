import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSafetyDocsHistoryComponent } from './new-safety-docs-history.component';

describe('NewSafetyDocsHistoryComponent', () => {
  let component: NewSafetyDocsHistoryComponent;
  let fixture: ComponentFixture<NewSafetyDocsHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSafetyDocsHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSafetyDocsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

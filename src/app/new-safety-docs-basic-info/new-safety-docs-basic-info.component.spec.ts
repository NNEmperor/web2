import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSafetyDocsBasicInfoComponent } from './new-safety-docs-basic-info.component';

describe('NewSafetyDocsBasicInfoComponent', () => {
  let component: NewSafetyDocsBasicInfoComponent;
  let fixture: ComponentFixture<NewSafetyDocsBasicInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSafetyDocsBasicInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSafetyDocsBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

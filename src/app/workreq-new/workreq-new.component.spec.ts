import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkreqNewComponent } from './workreq-new.component';

describe('WorkreqNewComponent', () => {
  let component: WorkreqNewComponent;
  let fixture: ComponentFixture<WorkreqNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkreqNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkreqNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

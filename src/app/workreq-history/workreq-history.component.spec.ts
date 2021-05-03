import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkreqHistoryComponent } from './workreq-history.component';

describe('WorkreqHistoryComponent', () => {
  let component: WorkreqHistoryComponent;
  let fixture: ComponentFixture<WorkreqHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkreqHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkreqHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

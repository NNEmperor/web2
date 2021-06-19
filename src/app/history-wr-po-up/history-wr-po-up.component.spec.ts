import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryWrPoUpComponent } from './history-wr-po-up.component';

describe('HistoryWrPoUpComponent', () => {
  let component: HistoryWrPoUpComponent;
  let fixture: ComponentFixture<HistoryWrPoUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryWrPoUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryWrPoUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

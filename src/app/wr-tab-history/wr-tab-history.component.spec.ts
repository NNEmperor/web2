import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrTabHistoryComponent } from './wr-tab-history.component';

describe('WrTabHistoryComponent', () => {
  let component: WrTabHistoryComponent;
  let fixture: ComponentFixture<WrTabHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrTabHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrTabHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrTabComponent } from './wr-tab.component';

describe('WrTabComponent', () => {
  let component: WrTabComponent;
  let fixture: ComponentFixture<WrTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

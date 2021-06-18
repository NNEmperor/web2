import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrTabMediaComponent } from './wr-tab-media.component';

describe('WrTabMediaComponent', () => {
  let component: WrTabMediaComponent;
  let fixture: ComponentFixture<WrTabMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrTabMediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrTabMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

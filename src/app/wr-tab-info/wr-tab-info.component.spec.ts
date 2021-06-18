import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrTabInfoComponent } from './wr-tab-info.component';

describe('WrTabInfoComponent', () => {
  let component: WrTabInfoComponent;
  let fixture: ComponentFixture<WrTabInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrTabInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrTabInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

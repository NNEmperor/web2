import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrBasicInfoPopUpComponent } from './wr-basic-info-pop-up.component';

describe('WrBasicInfoPopUpComponent', () => {
  let component: WrBasicInfoPopUpComponent;
  let fixture: ComponentFixture<WrBasicInfoPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrBasicInfoPopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrBasicInfoPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

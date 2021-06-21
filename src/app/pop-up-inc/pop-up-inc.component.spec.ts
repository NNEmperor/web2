import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpIncComponent } from './pop-up-inc.component';

describe('PopUpIncComponent', () => {
  let component: PopUpIncComponent;
  let fixture: ComponentFixture<PopUpIncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpIncComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpIncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

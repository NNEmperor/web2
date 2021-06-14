import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDevicesPopUpComponent } from './select-devices-pop-up.component';

describe('SelectDevicesPopUpComponent', () => {
  let component: SelectDevicesPopUpComponent;
  let fixture: ComponentFixture<SelectDevicesPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectDevicesPopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectDevicesPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

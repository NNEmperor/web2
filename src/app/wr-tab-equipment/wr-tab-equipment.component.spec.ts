import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrTabEquipmentComponent } from './wr-tab-equipment.component';

describe('WrTabEquipmentComponent', () => {
  let component: WrTabEquipmentComponent;
  let fixture: ComponentFixture<WrTabEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrTabEquipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrTabEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapDocPopUpComponent } from './map-doc-pop-up.component';

describe('MapDocPopUpComponent', () => {
  let component: MapDocPopUpComponent;
  let fixture: ComponentFixture<MapDocPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapDocPopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapDocPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

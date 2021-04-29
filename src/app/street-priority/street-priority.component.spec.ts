import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreetPriorityComponent } from './street-priority.component';

describe('StreetPriorityComponent', () => {
  let component: StreetPriorityComponent;
  let fixture: ComponentFixture<StreetPriorityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreetPriorityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StreetPriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWorkPlansComponent } from './my-work-plans.component';

describe('MyWorkPlansComponent', () => {
  let component: MyWorkPlansComponent;
  let fixture: ComponentFixture<MyWorkPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyWorkPlansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyWorkPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkreqBasicinfoComponent } from './workreq-basicinfo.component';

describe('WorkreqBasicinfoComponent', () => {
  let component: WorkreqBasicinfoComponent;
  let fixture: ComponentFixture<WorkreqBasicinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkreqBasicinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkreqBasicinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTeamPopUpComponent } from './select-team-pop-up.component';

describe('SelectTeamPopUpComponent', () => {
  let component: SelectTeamPopUpComponent;
  let fixture: ComponentFixture<SelectTeamPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectTeamPopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectTeamPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

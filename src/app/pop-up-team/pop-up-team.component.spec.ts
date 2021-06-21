import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpTeamComponent } from './pop-up-team.component';

describe('PopUpTeamComponent', () => {
  let component: PopUpTeamComponent;
  let fixture: ComponentFixture<PopUpTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

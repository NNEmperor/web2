import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetSettingsComponent } from './reset-settings.component';

describe('ResetSettingsComponent', () => {
  let component: ResetSettingsComponent;
  let fixture: ComponentFixture<ResetSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

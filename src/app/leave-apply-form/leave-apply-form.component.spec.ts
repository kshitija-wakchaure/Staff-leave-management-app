import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveApplyFormComponent } from './leave-apply-form.component';

describe('LeaveApplyFormComponent', () => {
  let component: LeaveApplyFormComponent;
  let fixture: ComponentFixture<LeaveApplyFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeaveApplyFormComponent]
    });
    fixture = TestBed.createComponent(LeaveApplyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

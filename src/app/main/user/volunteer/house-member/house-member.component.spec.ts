import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseMemberComponent } from './house-member.component';

describe('HouseMemberComponent', () => {
  let component: HouseMemberComponent;
  let fixture: ComponentFixture<HouseMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

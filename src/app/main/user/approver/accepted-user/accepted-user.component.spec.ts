import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedUserComponent } from './accepted-user.component';

describe('AcceptedUserComponent', () => {
  let component: AcceptedUserComponent;
  let fixture: ComponentFixture<AcceptedUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptedUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

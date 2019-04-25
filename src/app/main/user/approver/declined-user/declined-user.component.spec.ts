import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclinedUserComponent } from './declined-user.component';

describe('DeclinedUserComponent', () => {
  let component: DeclinedUserComponent;
  let fixture: ComponentFixture<DeclinedUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeclinedUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclinedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

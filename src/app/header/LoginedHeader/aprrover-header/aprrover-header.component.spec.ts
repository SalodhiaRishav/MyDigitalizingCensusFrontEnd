import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AprroverHeaderComponent } from './aprrover-header.component';

describe('AprroverHeaderComponent', () => {
  let component: AprroverHeaderComponent;
  let fixture: ComponentFixture<AprroverHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprroverHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprroverHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

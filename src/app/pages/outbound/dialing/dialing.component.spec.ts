import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialingComponent } from './dialing.component';

describe('DialingComponent', () => {
  let component: DialingComponent;
  let fixture: ComponentFixture<DialingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

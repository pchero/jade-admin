import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalCallsComponent } from './total-calls.component';

describe('TotalCallsComponent', () => {
  let component: TotalCallsComponent;
  let fixture: ComponentFixture<TotalCallsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalCallsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

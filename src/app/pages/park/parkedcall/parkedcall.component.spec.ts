import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkedcallComponent } from './parkedcall.component';

describe('ParkedcallComponent', () => {
  let component: ParkedcallComponent;
  let fixture: ComponentFixture<ParkedcallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkedcallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkedcallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

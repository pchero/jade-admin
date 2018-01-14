import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueCallsComponent } from './queue-calls.component';

describe('QueueCallsComponent', () => {
  let component: QueueCallsComponent;
  let fixture: ComponentFixture<QueueCallsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueueCallsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueueCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

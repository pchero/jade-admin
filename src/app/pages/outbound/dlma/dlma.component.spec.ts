import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DlmaComponent } from './dlma.component';

describe('DlmaComponent', () => {
  let component: DlmaComponent;
  let fixture: ComponentFixture<DlmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DlmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DlmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackupsettingsComponent } from './backupsettings.component';

describe('BackupsettingsComponent', () => {
  let component: BackupsettingsComponent;
  let fixture: ComponentFixture<BackupsettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackupsettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackupsettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

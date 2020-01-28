import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldDashboardComponent } from './old-dashboard.component';

describe('DashboardComponent', () => {
  let component: OldDashboardComponent;
  let fixture: ComponentFixture<OldDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbRbMonthlyReportRendererComponent } from './nb-rb-monthly-report-renderer.component';

describe('NbRbMonthlyReportRendererComponent', () => {
  let component: NbRbMonthlyReportRendererComponent;
  let fixture: ComponentFixture<NbRbMonthlyReportRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbRbMonthlyReportRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbRbMonthlyReportRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbRbYearlyReportRendererComponent } from './nb-rb-yearly-report-renderer.component';

describe('NbRbYearlyReportRendererComponent', () => {
  let component: NbRbYearlyReportRendererComponent;
  let fixture: ComponentFixture<NbRbYearlyReportRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbRbYearlyReportRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbRbYearlyReportRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumReportComponent } from './premium-report.component';

describe('PremiumReportComponent', () => {
  let component: PremiumReportComponent;
  let fixture: ComponentFixture<PremiumReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremiumReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiumReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

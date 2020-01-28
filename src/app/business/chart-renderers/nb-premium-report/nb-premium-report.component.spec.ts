import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbPremiumReportComponent } from './nb-premium-report.component';

describe('NbPremiumReportComponent', () => {
  let component: NbPremiumReportComponent;
  let fixture: ComponentFixture<NbPremiumReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbPremiumReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbPremiumReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

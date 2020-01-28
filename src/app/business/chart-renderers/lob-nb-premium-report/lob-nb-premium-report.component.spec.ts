import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LobNbPremiumReportComponent } from './lob-nb-premium-report.component';

describe('LobNbPremiumReportComponent', () => {
  let component: LobNbPremiumReportComponent;
  let fixture: ComponentFixture<LobNbPremiumReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LobNbPremiumReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LobNbPremiumReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

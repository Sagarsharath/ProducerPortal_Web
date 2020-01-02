import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LobReportComponent } from './lob-report.component';

describe('LobReportComponent', () => {
  let component: LobReportComponent;
  let fixture: ComponentFixture<LobReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LobReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LobReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

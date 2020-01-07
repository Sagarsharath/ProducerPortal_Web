import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbRbComparisionReportRendererComponent } from './nb-rb-comparision-report-renderer.component';

describe('NbRbComparisionReportRendererComponent', () => {
  let component: NbRbComparisionReportRendererComponent;
  let fixture: ComponentFixture<NbRbComparisionReportRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbRbComparisionReportRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbRbComparisionReportRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

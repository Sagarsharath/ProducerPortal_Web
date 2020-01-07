import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PifReportRendererComponent } from './pif-report-renderer.component';

describe('PifReportRendererComponent', () => {
  let component: PifReportRendererComponent;
  let fixture: ComponentFixture<PifReportRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PifReportRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PifReportRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

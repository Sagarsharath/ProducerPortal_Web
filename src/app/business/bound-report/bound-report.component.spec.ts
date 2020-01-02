import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoundReportComponent } from './bound-report.component';

describe('BoundReportComponent', () => {
  let component: BoundReportComponent;
  let fixture: ComponentFixture<BoundReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoundReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoundReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

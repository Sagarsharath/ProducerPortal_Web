import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldBarChartComponent } from './bar-chart.component';

describe('BarChartComponent', () => {
  let component: OldBarChartComponent;
  let fixture: ComponentFixture<OldBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

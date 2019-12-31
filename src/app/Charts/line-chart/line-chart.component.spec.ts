import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldLineChartComponent } from './line-chart.component';

describe('OldLineChartComponent', () => {
  let component: OldLineChartComponent;
  let fixture: ComponentFixture<OldLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldLineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

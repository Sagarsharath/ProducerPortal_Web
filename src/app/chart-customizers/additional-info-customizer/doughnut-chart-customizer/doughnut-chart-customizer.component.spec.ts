import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoughnutChartCustomizerComponent } from './doughnut-chart-customizer.component';

describe('DoughnutChartCustomizerComponent', () => {
  let component: DoughnutChartCustomizerComponent;
  let fixture: ComponentFixture<DoughnutChartCustomizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoughnutChartCustomizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoughnutChartCustomizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

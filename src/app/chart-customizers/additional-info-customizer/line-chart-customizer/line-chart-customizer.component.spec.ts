import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartCustomizerComponent } from './line-chart-customizer.component';

describe('LineChartCustomizerComponent', () => {
  let component: LineChartCustomizerComponent;
  let fixture: ComponentFixture<LineChartCustomizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineChartCustomizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineChartCustomizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

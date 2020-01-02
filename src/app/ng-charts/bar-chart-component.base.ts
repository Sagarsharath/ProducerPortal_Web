import { Input } from '@angular/core';
import { NgChartDataModel } from './models/ng-chart-data.model';
import { ChartComponentBase } from './chartComponentBase';
import { ChartOptions } from 'chart.js';

export class BarChartComponentBase {
  @Input()
  chartData: NgChartDataModel;
  @Input()
  chartOptions: ChartOptions;
  constructor() {
    this.initializeChartData();
  }
  initializeChartData(): void {
    this.chartData = new NgChartDataModel();
    this.chartData.datasets = [
      {
        data: []
      }
    ];
  }
}

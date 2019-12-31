import { ChartType, ChartDataSets, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { Input } from '@angular/core';
import { NgChartDataModel } from './models/ng-chart-data.model';
import { DataModelMapper } from '../nb-premium-renderer/data-model.mapper';

export class ChartComponentBase {

  @Input()
  chartData: NgChartDataModel;
  chartType: ChartType;
  legend: boolean;
  plugins = [];
  constructor() {

  }

  chartOptions: ChartOptions;
}

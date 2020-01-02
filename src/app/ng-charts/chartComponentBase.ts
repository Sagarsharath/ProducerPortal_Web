import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { Input } from '@angular/core';

export class ChartComponentBase {
  @Input()
  chartOptions: ChartOptions;

  constructor() {
  }

}

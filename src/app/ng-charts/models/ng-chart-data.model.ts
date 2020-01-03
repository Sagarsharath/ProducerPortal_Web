import { Label } from 'ng2-charts/lib/base-chart.directive';
import { ChartDataSets } from 'chart.js';
export class NgChartDataModel{
  labels: Label[] = [];
  datasets: ChartDataSets[];
}
import { Label } from 'ng2-charts/lib/base-chart.directive';
import { ChartDataSets } from 'chart.js';

export class NgChartDataModel{
  labels: Label[] = [];
  dataSets: ChartDataSets[] =  [
    {
      data: [], label: "" // barThickness: 15, maxBarThickness: 35,
    }
  ];;
}

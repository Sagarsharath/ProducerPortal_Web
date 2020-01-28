import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent} from '@colap-dev/ngx-britecharts/dist'

@Component({
  selector: 'bc-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  @ViewChild('lineChart',{static: false}) lineChart: ChartComponent;
  private lineChartData = [];
  private lineChartConfig = {
    properties: {
        isAnimated: true,
        aspectRatio: 0.5,
        grid: 'horizontal',
        tooltipThreshold: 600,
        margin: {
            top: 60,
            bottom: 50,
            left: 50,
            right: 30
        },
        dateLabel: 'fullDate',
    },
   // click: this.onDemoLineChartClick,
    tooltip: {
        valueLabel: 'value',
        title: 'Quantity Sold',
    },
    loading: false
};
  constructor() { }

  ngOnInit() {
  }

}

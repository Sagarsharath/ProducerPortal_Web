import { Component, Input } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})

export class BarChartComponent {

  index =5;
  constructor( 
               
     ){}
  barChartOptions: ChartOptions = {
    responsive: true,
    legend: { position: 'right' },
    
     tooltips: {
      custom: function(tooltip) {
        if (!tooltip) return;
        tooltip.displayColors = false;
        //tooltip._bodyAlign 
      }
  }
}
  @Input() barChartLabels: Label[];

  barChartType: ChartType =  'bar';
  barChartLegend = true;
  barChartPlugins = [];
  @Input() barChartData: ChartDataSets[];
    
}


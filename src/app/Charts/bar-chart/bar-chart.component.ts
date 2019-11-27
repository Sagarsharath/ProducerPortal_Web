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
  constructor(){}
  barChartOptions: ChartOptions = {
    responsive: true,
    legend: { position: 'right' ,
    labels: {
      fontColor: '#d5dee0', 
    },
    },
    scales: {
      xAxes: [{
        stacked: true,
        ticks: {
          fontColor: '#d5dee0',  
        },
        gridLines: {
          color: '#868d8f' 
        },
        scaleLabel: {
          display: true,
          labelString: '', // can be used to display y axis info
          fontColor: '#d5dee0', 
        }
      }],
      yAxes: [{
        stacked: true,
        ticks: {
          fontColor: '#d5dee0',
          min: 0,
          beginAtZero: true,

        },
        gridLines: {
          color: '#868d8f' 
        },
        scaleLabel: {
          display: true,
          labelString: '', // can be used to display y axis info
          fontColor: '', 
        }
      }]
    },
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


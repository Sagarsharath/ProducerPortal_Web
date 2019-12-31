import { Component, } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})

export class OldLineChartComponent {

  lineChartData: ChartDataSets[];

  lineChartLabels: Label[] ;

  lineChartOptions = {
    responsive: true,
    legend: { position: 'right' },
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
      }
  }
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
  
}

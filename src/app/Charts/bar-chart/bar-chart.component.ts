import { Component, Input } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})

export class OldBarChartComponent {

  @Input() barChartLabels: Label[];
  @Input() barChartData: ChartDataSets[];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  loader: boolean;
  barChartPlugins = [];

  constructor(

  ) {

  }

  barChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'right',
      labels: {
        fontColor: '#ffffff',
      },
    },
    scales: {
      xAxes: [{
        stacked: true,
        ticks: {
          fontColor: '#ffffff',
        },
        gridLines: {
          color: '#65b6d6'
        },
        scaleLabel: {
          display: true,
          labelString: '', // can be used to display y axis info
          fontColor: '#ffffff',
        }
      }],
      yAxes: [{
        stacked: true,
        ticks: {
          fontColor: '#ffffff',
          min: 0,
          beginAtZero: true,

        },
        gridLines: {
          color: '#868d8f'
        },
        scaleLabel: {
          display: true,
          labelString: '',  // can be used to display y axis info
          fontColor: '#ffffff',
        }
      }]
    },
    tooltips: {
      custom: function (tooltip) {
        if (!tooltip) return;
        tooltip.displayColors = false;
        //tooltip._bodyAlign
      }
      // callbacks: {
      //   label:"";}
    }
  }



}


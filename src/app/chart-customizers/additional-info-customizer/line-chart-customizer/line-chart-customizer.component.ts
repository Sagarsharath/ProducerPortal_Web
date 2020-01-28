import { Component, OnInit, Input } from '@angular/core';
import { ChartLegendOptions, ChartTooltipOptions, ChartScales, ChartOptions } from 'chart.js';
import { NgChartDataModel } from 'src/app/ng-charts/models/ng-chart-data.model';

@Component({
  selector: 'app-line-chart-customizer',
  templateUrl: './line-chart-customizer.component.html',
  styleUrls: ['./line-chart-customizer.component.scss']
})
export class LineChartCustomizerComponent implements OnInit {

  legendOptions: ChartLegendOptions;
  tooltipsOptions: ChartTooltipOptions;
  scalesOptions: ChartScales;
  chartOptions: ChartOptions;

  @Input()
  chartData: NgChartDataModel;


  constructor() { }

  ngOnInit() {
    if(this.chartData.datasets != undefined){
      this.configureChartOPtions();
    }
    
  }

  ngOnChanges(): void {
    this.configureChartOPtions();
  }


  private configureChartOPtions(): void {
    this.legendOptions = {
      align : 'end',
      position: 'right',
      labels: {
        fontColor: '#ffffff',        
        boxWidth:20
      },     
      
    };
    this.scalesOptions = {
    
      xAxes: [{
        stacked: false,
        ticks: {
          fontColor: '#7f8899',
        },
        gridLines: {
          borderDash: [8, 4],
          color: '#d2d7d9'
        },
        scaleLabel: {
          display: true,
          labelString: '', // can be used to display y axis info
          fontColor: '#7f8899',
        }
      }],
      yAxes: [{
        stacked: false,
        ticks: {
          fontColor: '#7f8899',
          min: 0,
          beginAtZero: true,

        },
        gridLines: {
          borderDash: [8, 4],
          color: '#d2d7d9'
        },
        scaleLabel: {
          display: true,
          labelString: '',  // can be used to display y axis info
          fontColor: '#7f8899',
        }
      }]
    };
    this.tooltipsOptions = {
      custom: function (tooltip) {
        if (!tooltip) return;
        tooltip.displayColors = false;
      }
    };
    this.chartOptions = {
      responsive: true,
      legend: this.legendOptions,
      scales: this.scalesOptions,
      tooltips: this.tooltipsOptions,
      
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
    }
  }
}

import { Component, OnInit, Input, OnChanges, ViewChild, ViewChildren, AfterViewInit } from '@angular/core';
import { NgChartDataModel } from 'src/app/ng-charts/models/ng-chart-data.model';
import { BarChartComponent } from 'src/app/ng-charts/bar-chart/bar-chart.component';
import { ChartScales, ChartLegendOptions, ChartTooltipOptions, ChartOptions } from 'chart.js';

@Component({
  selector: 'bar-chart-customizer',
  templateUrl: './bar-chart-customizer.component.html',
  styleUrls: ['./bar-chart-customizer.component.scss']
})
export class BarChartCustomizerComponent implements OnInit, OnChanges {
  legendOptions: ChartLegendOptions;
  tooltipsOptions: ChartTooltipOptions;
  scalesOptions: ChartScales;
  chartOptions: ChartOptions;

  @Input()
  chartData: NgChartDataModel;

  @Input()
  label: string;

  @Input()
  additionalInfo: string;


  constructor() { }

  ngOnInit() {
    this.configureChartOPtions();
  }

  ngOnChanges(): void {
    this.configureChartOPtions();
  }


  private configureChartOPtions(): void {
    this.legendOptions = {
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
        stacked: false,
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

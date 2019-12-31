import { Component, OnInit, Input } from '@angular/core';
import { ChartType, ChartDataSets, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { ChartComponentBase } from '../chartComponentBase';
import { NgChartDataModel } from '../models/ng-chart-data.model';

@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent extends ChartComponentBase implements OnInit {

  @Input()
  chartData: NgChartDataModel;



  constructor() {
    super();
  }

  ngOnInit() {
    this.loadDefaultData();
    this.configureChartOPtions();
    console.log(this.chartData.dataSets.length);
    }

  private loadDefaultData():void{
    this.chartData = new NgChartDataModel();
    this.chartData.dataSets =
      [
        {
          data: [], label: "" // barThickness: 15, maxBarThickness: 35,
        }
      ];
      // this.chartData.labels =
      // [

      // ];
  }

  private configureChartOPtions():void{

    this.chartType = 'bar';
    this.legend = true;

    this.chartOptions = {
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

}

import { Component, OnInit, Input, OnChanges, ViewChild } from '@angular/core';
import { NgChartDataModel } from 'src/app/ng-charts/models/ng-chart-data.model';
import { BarChartComponent } from 'src/app/ng-charts/bar-chart/bar-chart.component';

@Component({
  selector: 'bar-chart-customizer',
  templateUrl: './bar-chart-customizer.component.html',
  styleUrls: ['./bar-chart-customizer.component.scss']
})
export class BarChartCustomizerComponent implements OnInit, OnChanges {
  @ViewChild(BarChartComponent, { static: false }) chartComponent: BarChartComponent;

  @Input()
  chartType:string;

  @Input()
  average: Number;
  @Input()
  chartData: NgChartDataModel;

  additionalInfotext: string = "Average: ";
  additionalInfo: string;
  constructor() { }

  ngOnInit() {
    this.additionalInfo = this.additionalInfo + this.average;
    // this.configureChartOPtions();
  }

  ngOnChanges(): void {
    this.additionalInfo = this.additionalInfo;
    // this.configureChartOPtions();
  }


  private configureChartOPtions(): void {

    this.chartComponent.legend = true;

    this.chartComponent.chartOptions = {
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

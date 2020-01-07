import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { ChartType, ChartPointOptions, ChartTooltipOptions, ChartOptions , ChartColor } from 'chart.js';
import { MultiDataSet, Label, Colors } from 'ng2-charts';
import { PieChartDataModel } from '../models/pie-chart-data.model';
import { DoughnutChartDataModel } from '../models/doughnut-chart-data.models';

@Component({
  selector: 'doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})

export class DoughnutChartComponent implements OnInit, OnChanges{
 
  @Input()
  chartOptions: ChartOptions;

  @Input()
  chartData: DoughnutChartDataModel;
  
  @Input()
  colors: ChartColor;
  legend: boolean = true;
  private donutColors;
  private donutData:any[];
  ngOnInit() {
    this.initializeChartData();
  }
  ngOnChanges(){
   
  }
  
  private initializeChartData(): void {
    this.donutColors=[
      {
        backgroundColor: [
          'rgba(110, 114, 20, 1)',
          'rgba(118, 183, 172, 1)',
          'rgba(0, 148, 97, 1)',
          'rgba(129, 78, 40, 1)',
          'rgba(129, 199, 111, 1)'
      ]
      }
    ];
   // this.chartData = new DoughnutChartDataModel();
  //  this.chartData.datasets = [];
  }
 
  doughnutChartType: ChartType = 'doughnut';

  constructor() {

  }
}
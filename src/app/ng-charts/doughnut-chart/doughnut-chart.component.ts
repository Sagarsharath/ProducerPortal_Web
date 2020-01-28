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
  ngOnInit() {
    
  }
  ngOnChanges(){
   
  }
  
 
 
  doughnutChartType: ChartType = 'doughnut';

  constructor() {

  }
}
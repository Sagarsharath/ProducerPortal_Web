import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { NgChartDataModel } from '../models/ng-chart-data.model';

@Component({
  selector: 'line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  @Input() public chartData : NgChartDataModel ;
  @Input() public chartOptions : ChartOptions ;
  // public lineChartData: ChartDataSets[] = [
  //   { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' }
  // ];
  // public lineChartLabels: Label[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  constructor() { }

  ngOnInit() {
  }

}

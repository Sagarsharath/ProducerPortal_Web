import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { PieChartDataModel } from '../models/pie-chart-data.model';
import { Colors } from 'ng2-charts';
import { ChartComponentBase } from '../chartComponentBase';

@Component({
  selector: 'pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  legend: boolean = true;
  plugins = [];

  @Input()
  chartOptions: ChartOptions;

  @Input()
  chartData: PieChartDataModel;

  @Input()
  colors: Colors;

  constructor() { }

  ngOnInit() {
    this.initializeChartData();
  }

  private initializeChartData(): void {
    this.chartData = new PieChartDataModel();
    this.chartData.datasets = [];
  }

}

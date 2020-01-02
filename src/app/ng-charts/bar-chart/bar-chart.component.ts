import { Component, OnInit, Input } from '@angular/core';
import { ChartType, ChartDataSets, ChartOptions, ChartLegendOptions, ChartTooltipOptions, ChartScales, LinearScale, LogarithmicScale, TimeScale } from 'chart.js';
import { Label } from 'ng2-charts';
import { ChartComponentBase } from '../chartComponentBase';
import { NgChartDataModel } from '../models/ng-chart-data.model';
import { IChartComponent } from '../models/chart-component.interface';
import { BarChartComponentBase } from '../bar-chart-component.base';

@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent extends BarChartComponentBase implements IChartComponent, OnInit {
  // responsive: boolean;
  // legendOptions: ChartLegendOptions;
  // tooltipsOptions: ChartTooltipOptions;
  // scalesOptions?: ChartScales;
  legend: boolean = true;
  plugins = [];



  constructor() {
    super();
  }

  ngOnInit() {
    this.initializeChartData();
    this.configureChartOptions();
  }
  private configureChartOptions(): void {
    // this.chartOptions = {
    //   responsive: this.responsive,
    //   legend: this.legendOptions,
    //   scales: this.scalesOptions,
    //   tooltips: this.tooltipsOptions
    // };
  }

}

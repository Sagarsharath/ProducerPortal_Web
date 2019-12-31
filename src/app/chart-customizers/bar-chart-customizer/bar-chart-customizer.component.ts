import { Component, OnInit, Input } from '@angular/core';
import { NgChartDataModel } from 'src/app/ng-charts/models/ng-chart-data.model';

@Component({
  selector: 'bar-chart-customizer',
  templateUrl: './bar-chart-customizer.component.html',
  styleUrls: ['./bar-chart-customizer.component.scss']
})
export class BarChartCustomizerComponent implements OnInit {

  @Input()
  chartData: NgChartDataModel;
  constructor() { }

  ngOnInit() {
  }

}

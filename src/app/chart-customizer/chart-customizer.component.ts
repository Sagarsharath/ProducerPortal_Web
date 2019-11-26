import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { BarChartComponent } from '../Charts/bar-chart/bar-chart.component';
import { customizerDataModel } from './../Charts/ChartModels';

@Component({
  selector: 'chart-customizer',
  templateUrl: './chart-customizer.component.html',
  styleUrls: ['./chart-customizer.component.scss']
})
export class ChartCustomizerComponent implements OnInit {
 
  @Input() dataChild : any;
  @Input() customizerData : customizerDataModel;
  @Input() Labels : any;
  @ViewChild(BarChartComponent, { static: false }) barChartComponent: BarChartComponent;
  constructor() {
        
  }


  ngOnInit() {
  }

}

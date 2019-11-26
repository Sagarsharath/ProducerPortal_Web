import { Component, Input } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { DataLoaderService} from './../../Services/data-loader.service';
 import { inputData} from './../chartsData';
import { ApiServiceService} from './../../Services/api-service.service';
@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})

export class BarChartComponent {
  //public axc : any[];

  @Input() axc =[];
  index =5;
  constructor( 
               private loadData : ApiServiceService,
               private another : DataLoaderService,
               
     ){}
  barChartOptions: ChartOptions = {
    responsive: true,
    legend: { position: 'right' },
    
     tooltips: {
      custom: function(tooltip) {
        if (!tooltip) return;
        tooltip.displayColors = false;
        //tooltip._bodyAlign 
      }
  }
}
  @Input() barChartLabels: Label[];//=  ['2010-11', '2011-12', '2012-13', '2013-14', '2014-15', '2015-16'];

  barChartType: ChartType =  'bar';
  barChartLegend = true;
  barChartPlugins = [];
  @Input() barChartData: ChartDataSets[];
    
}


import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
  })
export class BarChartModel {
    public chartType: chartTypes;
    public values: ChartDataSets[];
    public barChartLabels: Label[] ;//= ['2010-11', '2011-12', '2012-13', '2013-14', '2014-15', '2015-16'];
}
@Injectable({
    providedIn: 'root'
})
export class chartTypes {
    public pie = false;
    public bar = false;
}
@Injectable({
    providedIn: 'root'
})
export class customizerDataModel extends chartTypes {
   // public cType: chartTypes;
    public description: string;
    public additionalInfo: string;
}
export class defaultColors{
    public static RGB = [
    '#8f6f85',
    '#94aab5',
    '#94b59d',
    '#736329',
    '#6b1616',
    '#521343',
    '#05134d',  ];
}

import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { Injectable } from '@angular/core';
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
    public barChartDescription : string;
    public barChartAdditionalInfo: string;
    public pieChartDescription : string;
    public pieChartAdditionalInfo: string;
    public description: string;
    public additionalInfo: string;
}
@Injectable({
    providedIn: 'root'
})
export class ChartDataModel extends customizerDataModel {
    public chartType: chartTypes;
    public barChartValues: ChartDataSets[];
    public barChartLabels: Label[];
    public pieChartValues: any[];
    // these data is fixed for currently known piechart data, need to remove it if changes
    public pieChartLabels = ['submission', 'quoted', 'bound'];
}
@Injectable({
    providedIn: 'root'
})
export class defaultColors {
    public static RGB = [
        '#8f6f85',
        '#94aab5',
        '#94b59d',
        '#736329',
        '#6b1616',
        '#521343',
        '#05134d',];
}

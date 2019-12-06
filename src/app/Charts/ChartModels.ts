import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ChartDataModel {
    constructor() { }
    public description: string;
    public additionalInfo: string;
    public values: any[];
    public barlabel: string;
    public chartLabels: Label[];

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
        '#3a4d99',
        '#c68ee6',
        '#cc91bc',
        '#a16a94',
    ];
}

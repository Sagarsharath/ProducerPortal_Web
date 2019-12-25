import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ChartDataModel {
    constructor() { }
    public description: string;
    public additionalInfo: String;
    public values: any[];
    public barlabel: string;
    public chartLabels: Label[];

}
@Injectable({
    providedIn: 'root'
})
export class defaultColors {
    public static RGB = [
        '#a697a0',
        '#94aab5',
        '#94b59d',
        '#ad9a53',
        '#6b1616',
        '#521343',
        '#3a4d99',
        '#c68ee6',
        '#cc91bc',
        '#a16a94',
    ];
}

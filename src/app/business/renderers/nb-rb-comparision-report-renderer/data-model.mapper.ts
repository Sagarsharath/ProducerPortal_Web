import { NBorRBPremium } from '../../../Services/data-store/model/nbPremium.model';
import { NgChartDataModel } from '../../../ng-charts/models/ng-chart-data.model';
import { Injectable } from '@angular/core';
import { PieChartComponent } from 'src/app/ng-charts/pie-chart/pie-chart.component';
import { PieChartDataModel } from 'src/app/ng-charts/models/pie-chart-data.model';


@Injectable()
export class DataModelMapper {
    public toDataModel(model: NBorRBPremium, chartsData : PieChartDataModel,label: string): PieChartDataModel {
        let totalPremium : any = 0;
        if (model.spans != undefined) {
          model.spans.forEach(element => {
              totalPremium = totalPremium + element.totalPremium
          });
        }
        chartsData.labels.push(label);
      chartsData.datasets.push(totalPremium)
        return chartsData;
      }
}


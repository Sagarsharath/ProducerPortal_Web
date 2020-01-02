import { NBPremium } from '../../../Services/data-store/model/nbPremium.model';


import { NgChartDataModel } from '../../../ng-charts/models/ng-chart-data.model';
import { Injectable } from '@angular/core';


@Injectable()
export class DataModelMapper {

  public toDataModel(model: NBPremium): NgChartDataModel {
    let chartsData = new NgChartDataModel();
    let valuesArray = [];
    let labelsArray = [];
    if (model.spans != undefined) {
      model.spans.forEach(element => {
        valuesArray.push(element.totalPremium)
      });
      model.spans.forEach(element => {
        labelsArray.push(element.spanName)
      });
    }
    chartsData.datasets = [
      {
        data:valuesArray
      }
    ];

    chartsData.labels = labelsArray;
    return chartsData;
  }

}


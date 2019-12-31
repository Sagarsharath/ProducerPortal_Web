import { NBPremium } from '../Services/data-store/model/nbPremium.model';

import { ChartDataModel } from '../Charts/ChartModels';
import { NgChartDataModel } from '../ng-charts/models/ng-chart-data.model';

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
    chartsData.dataSets = [
      {
        data:valuesArray
      }
    ];

    chartsData.labels = labelsArray;
    return chartsData;
  }

}


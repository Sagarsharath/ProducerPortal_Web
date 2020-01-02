import { SubmissionToBound_Model } from 'src/app/Services/data-store/model/nbPremium.model';
import { PieChartDataModel } from 'src/app/ng-charts/models/pie-chart-data.model';
import { chartsConfig } from 'src/app/Charts/chartsConfig';
import { Injectable } from '@angular/core';

@Injectable()
export class DataModelMapper {
  toDataModel(model: SubmissionToBound_Model): PieChartDataModel {
    let chartData = new PieChartDataModel();
    let valuesArray = [];
    if (model != undefined) {
      valuesArray.push(model.submission)
      valuesArray.push(model.quoted)
      valuesArray.push(model.bound)
    }
    chartData.datasets = valuesArray;
    chartData.labels = chartsConfig.labelsFor_SubmissionToBound_Chart;
    return chartData;

  }
}

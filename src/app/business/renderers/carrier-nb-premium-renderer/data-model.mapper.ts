import {  SubmissionToBound_Model, CarrierModel } from 'src/app/Services/data-store/model/nbPremium.model';
import { PieChartDataModel } from 'src/app/ng-charts/models/pie-chart-data.model';
import { chartsConfig } from 'src/app/Charts/chartsConfig';

export class DataModelMapper {
    toDataModel(model: CarrierModel[]): PieChartDataModel {
      let chartData = new PieChartDataModel();
      let valuesArray = [];
      let labelsArray =[];
      model.forEach(element =>{
          valuesArray.push(element.premium);
          labelsArray.push(element.carrierName);
      })
      chartData.datasets = valuesArray;
      chartData.labels = labelsArray;
      return chartData;
  
    }
  }

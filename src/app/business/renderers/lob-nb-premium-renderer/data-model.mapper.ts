import { LobnbPremium_Model } from 'src/app/Services/data-store/model/nbPremium.model';
import { PieChartDataModel } from 'src/app/ng-charts/models/pie-chart-data.model';

export class DataModelMapper {
  toDataModel(model: LobnbPremium_Model[]): PieChartDataModel {
    let chartData: PieChartDataModel = new PieChartDataModel();
    let valuesArray = [];
    let labelsArray = [];

    if (model != undefined) {
      model.forEach(element => {
        valuesArray.push(element.premium);
        labelsArray.push(element.description);
      })
    }
    chartData.datasets = valuesArray;
    chartData.labels = labelsArray;
    return chartData;
  }
}

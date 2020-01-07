import {  NBorRBPremium } from 'src/app/Services/data-store/model/nbPremium.model';
import { DoughnutChartDataModel } from 'src/app/ng-charts/models/doughnut-chart-data.models';
import { element } from 'protractor';

export class DataModelMapper {

    toDataModel(valuesArray: number[], chartData: any): DoughnutChartDataModel {
      chartData.datasets.push(valuesArray);
        return chartData;

    }
    
  setValuesArray(values:Number[],model:NBorRBPremium):Number[]{
    var sum : any=0;
    model.spans.forEach(element=>{
      sum = sum + element.totalPremium;
    });    
    values.push(sum)
    return values;
  }
}

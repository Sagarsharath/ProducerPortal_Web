import { NBorRBPremium } from '../../../Services/data-store/model/nbPremium.model';
import { NgChartDataModel } from '../../../ng-charts/models/ng-chart-data.model';
import { Injectable } from '@angular/core';
import { element } from 'protractor';


@Injectable()
export class DataModelMapper {

  public toDataModel(model: NBorRBPremium): NgChartDataModel {
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
    let valuesArray2 = [];
    valuesArray.forEach(element=>{
        valuesArray2.push(element+1500)
    })
    chartsData.datasets = [
      {
        data:valuesArray, label:'Renewal Premium'
      }
    ];

    chartsData.labels = labelsArray;
    return chartsData;
  }

}


import { Injectable } from '@angular/core';
import { ApiServiceService } from './../Services/api-service.service';
import { inputData} from './../Charts/chartsData';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { chartTypes, customizerDataModel,BarChartModel, defaultColors } from './../Charts/ChartModels';
import { Color,Label } from 'ng2-charts';
import { Observable, of } from 'rxjs';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class DataLoaderService {
  public valuesArray = new Array();
  public labelsArray = new Array();
  
  index =5;
  constructor(private api : ApiServiceService,
    private barchartData : BarChartModel) { }
  
  getBarChartData() {

    const mockData = require('./../Mock-Data/mock-nbpremium.json');
    mockData.forEach(element => {
      this.labelsArray.push(element.description),
      this.valuesArray.push(element.premium);
      
      
    });
    this.barchartData.values = [
      {data : this.valuesArray ,label:'premium'}
    ];
    this.barchartData.barChartLabels = this.labelsArray
    // this.api.getInfo()
    //   .subscribe(
    //     (data) => {
    //       for (var val in data) {
    //         if (this.index >= 0) {
    //           this.valuesArray.push(val);
    //           this.index--;
    //         }
    //       }
    //       console.log(data);
    //     }
    //   );
    return this.barchartData;
  }
}

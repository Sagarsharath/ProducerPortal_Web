import { Injectable } from '@angular/core';
import { ApiServiceService } from './../Services/api-service.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { chartTypes, customizerDataModel,ChartDataModel, defaultColors } from './../Charts/ChartModels';
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
    private chartsData : ChartDataModel) { }
  
  getBarChartsData() {

    const mockData = require('./../Mock-Data/mock-nbpremium.json');
     mockData.forEach(element => {
      this.labelsArray.push(element.description),
      this.valuesArray.push(element.premium)
      
      
    });
    
    // uncomment below code & remove mockData above when api is ready

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
    this.chartsData.barChartValues = [
      {data : this.valuesArray ,label:'premium'}
    ];
    this.chartsData.barChartLabels = this.labelsArray
    return this.chartsData;
  }

  getPieChartData() {
    const mockDataPie = require('./../Mock-Data/mock-submissiontobound-ratio.json');
    this.valuesArray.push(mockDataPie.submission);
    this.valuesArray.push(mockDataPie.quoted);
    this.valuesArray.push(mockDataPie.bound);

    // TODO 
    // call api service here and add assign data to valuesArray

    this.chartsData.pieChartValues = this.valuesArray;
    return this.chartsData;
  }
}

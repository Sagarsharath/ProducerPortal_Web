import { Injectable } from '@angular/core';
import { ApiServiceService } from './../Services/api-service.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { chartTypes, customizerDataModel, ChartDataModel, defaultColors } from './../Charts/ChartModels';
import { chartsConfig } from './../Charts/chartsConfig'
import { Color, Label } from 'ng2-charts';
import { Observable, of } from 'rxjs';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class DataLoaderService {

  public valuesArray = new Array();
  public labelsArray = new Array();

  index = 5;
  constructor(private api: ApiServiceService,
    private chartsData: ChartDataModel) { }
  
  get_NewBusinessData_Report() {
    const mockData = require('./../Mock-Data/mock-newbusiness.json');
    // TODO
    // need to add api call...
    mockData.spans.forEach(element => {
      this.valuesArray.push(element.totalPremium);
    });
    this.chartsData.barChartValues = [
      { data: this.valuesArray, label: 'Total Premium' ,backgroundColor:'rgba(255,255,0,0.28)'}
    ];
    this.chartsData.bar = true;
    this.chartsData.barChartLabels = chartsConfig.labelsForNewBusiness;
    this.chartsData.barChartDescription = chartsConfig._headingForMonthlyPremium;
    this.chartsData.barChartAdditionalInfo = chartsConfig._avgNBPremiumText + mockData.averagePremium.toFixed(2);
    return this.chartsData;
  }

  get_SubmissionToBound_Report(){
      const mockRatioData = require('./../Mock-Data/mock-submissiontobound-ratio.json');
      this.valuesArray = [mockRatioData.submission, mockRatioData.quoted, mockRatioData.bound];
      //var currentdata= new ChartDataModel();
      this.chartsData.pieChartValues = this.valuesArray;
      this.chartsData.pieChartDescription = chartsConfig._submissionToBoundRatio;
      this.chartsData.pieChartLabels = chartsConfig.labelsFor_SubmissionToBound_Chart;
      this.chartsData.pieChartAdditionalInfo = chartsConfig._ratio+mockRatioData.submissionToBoundRatio;
      return this.chartsData;
  }
  getBarChartsData() {

    const mockData = require('./../Mock-Data/mock-nbpremium.json');
    // mockData.forEach(element => {
    //   this.labelsArray.push(element.description), 
    //     this.valuesArray.push(element.premium)
    // });

    // uncomment below code & remove mockData when api is ready

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
    // this.chartsData.barChartValues = [
    //   { data: this.valuesArray, label: 'premium' }
    // ];
    // this.chartsData.barChartLabels = this.labelsArray;
    // console.log(JSON.stringify(this.chartsData));
    return this.chartsData;
  }

  getPieChartData() {
    const mockDataPie = require('./../Mock-Data/mock-submissiontobound-ratio.json');
    this.valuesArray = [mockDataPie.submission, mockDataPie.quoted, mockDataPie.bound];

    // TODO 
    // call api service here and add assign data to valuesArray
    this.chartsData.pie = true;
    this.chartsData.pieChartValues = [22,55,66];
    this.chartsData.pieChartLabels = ['fr','f','fh'];
    return this.chartsData;
  }
}

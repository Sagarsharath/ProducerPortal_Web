import { Injectable } from '@angular/core';
import { ApiServiceService } from './../Services/api-service.service';
import { ChartDataModel, defaultColors } from './../Charts/ChartModels';
import { chartsConfig } from './../Charts/chartsConfig';

@Injectable({
  providedIn: 'root'
})
export class DataLoaderService {
  index = 5;
  constructor(
    private api: ApiServiceService
  ) { }

  get_NewBusinessData_Report() {
    const mockData = require('./../Mock-Data/mock-newbusiness.json');
    let valuesArray = new Array();
    let labelsArray = new Array();
    mockData.spans.forEach(element => {
      valuesArray.push(element.totalPremium);
      labelsArray.push(element.spanName)
    });
    // TODO
    // need to add api call...
    //  test api code
    this.api.callNewBusinessApi()
      .subscribe(
        (data) => {
          console.log(data);
        }
      );
    let chartsData = new ChartDataModel();
    this.getBarChartsData();
    chartsData.values = valuesArray;
    chartsData.barlabel = 'Total Premium';
    chartsData.chartLabels = labelsArray //chartsConfig.labelsForNewBusiness;
    chartsData.description = chartsConfig._headingForMonthlyPremium;
    chartsData.additionalInfo = chartsConfig._avgNBPremiumText + mockData.averagePremium.toFixed(2);
    return chartsData;
  }

  get_SubmissionToBound_Report() {
    const mockRatioData = require('./../Mock-Data/mock-submissiontobound-ratio.json');
    let valuesArray = new Array();
    valuesArray = [mockRatioData.submission, mockRatioData.quoted, mockRatioData.bound];
    var chartsData = new ChartDataModel();
    chartsData.additionalInfo = chartsConfig._ratio + mockRatioData.submissionToBoundRatio;
    chartsData.description = chartsConfig._submissionToBoundRatio;
    chartsData.chartLabels = chartsConfig.labelsFor_SubmissionToBound_Chart;
    chartsData.values = valuesArray;
    // test api code
    this.api.tempcode()
    .subscribe(
      (data) => {
        console.log(data);
      }
    );
    return chartsData;
  }

  get_LOB_NBRenewal_Report() {
    const lobdata = require('./../Mock-Data/mock-Lob-nbpremium.json');
    let valuesArray = new Array();
    let labelsArray = new Array();
    var sum = 0
    lobdata.forEach(element => {
      valuesArray.push(element.premium);
      labelsArray.push(element.description);
      sum = sum + element.premium;
    });
    var chartsData = new ChartDataModel();
    chartsData.values = valuesArray;
    chartsData.chartLabels = labelsArray;
    chartsData.description = chartsConfig._LobReport;
    chartsData.additionalInfo = chartsConfig._total + sum;
    return chartsData;
  }

  getBarChartsData() {

    const mockData = require('./../Mock-Data/mock-Lob-nbpremium.json');
    var sum = 0;
    let valuesArray = new Array();
    // uncomment below code & remove mockData when api is ready

    // this.api.getInfo()
    //   .subscribe(
    //     (data) => {
    //       for (var val in data) {
    //         if (this.index >= 0) {
    //           valuesArray.push(val);
    //           this.index--;
    //         }
    //       }
    //       return data;
    //     }
    //   );


  }

  checklogin(username: any, passwaord: any) {
    return this.api.login(username, passwaord);
  }
}

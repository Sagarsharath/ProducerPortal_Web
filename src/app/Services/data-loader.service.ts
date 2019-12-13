import { Injectable } from '@angular/core';
import { ApiServiceService } from './../Services/api-service.service';
import { ChartDataModel, defaultColors } from './../Charts/ChartModels';
import { chartsConfig } from './../Charts/chartsConfig';
import { async } from 'q';
import { Observable, observable } from 'rxjs';
import { DataStoreService } from './data-store/data-store-service/data-store.service';

@Injectable({
  providedIn: 'root'
})
export class DataLoaderService {
  index = 5;
  constructor(
    private api: ApiServiceService,
    private dataStore: DataStoreService
  ) { }

  get_NewBusinessData_Report(datamodel:any) {

       this.api.callNewBusinessApi()
      .subscribe(
        data => {

          let chartsData = new ChartDataModel();
          let valuesArray = [];
          let labelsArray = [];
          let avg: number = 0;
          data.spans.forEach(element => {
            valuesArray.push(element.totalPremium);
            labelsArray.push(element.spanName);
          });
          avg = 10;//data.averagePremium.toFixed(2);
          console.log("inside")

          //chartsData.additionalInfo = chartsConfig._avgNBPremiumText + avg;
          //return chartsData;
          //this.setdata(chartsData , avg);
          //chartsData.additionalInfo = chartsConfig._avgNBPremiumText + data.averagePremium.toFixed(2);
          chartsData.barlabel = 'Total Premium';
          chartsData.description = chartsConfig._headingForMonthlyPremium;
          chartsData.values = valuesArray;
          chartsData.chartLabels = labelsArray;
          chartsData.additionalInfo = chartsConfig._avgNBPremiumText + avg.toString();
          datamodel = data;
        }


      );   


      


  }

  private updateCharts(data: any) {





  }
  setdata(chartsData: ChartDataModel, avg: any) {
    console.log(avg)
    chartsData.additionalInfo = chartsConfig._avgNBPremiumText + avg;
    console.log(chartsData)
  }
  get_SubmissionToBound_Report() {
    let valuesArray = new Array();
    var chartsData = new ChartDataModel();
    this.api.submissionToBoundApi()
      .subscribe(
        (data) => {
          valuesArray.push(data.submission);
          valuesArray.push(data.quoted);
          valuesArray.push(data.bound);
          chartsData.additionalInfo = chartsConfig._ratio + data.submissionToBoundRatio;
        }
      );
    chartsData.description = chartsConfig._submissionToBoundRatio;
    chartsData.chartLabels = chartsConfig.labelsFor_SubmissionToBound_Chart;
    chartsData.values = valuesArray;
    return chartsData;
  }

  get_LOB_NBRenewal_Report() {
    let valuesArray = new Array();
    let labelsArray = new Array();
    var sum = 0;
    this.api.lob_newBusinessApi()
      .subscribe(
        (data) => {
          data.forEach(element => {
            valuesArray.push(element.premium);
            labelsArray.push(element.description);
            sum = sum + element.premium;
          });
        }
      )
    var chartsData = new ChartDataModel();
    chartsData.values = valuesArray;
    chartsData.chartLabels = labelsArray;
    chartsData.description = chartsConfig._LobReport;
    chartsData.additionalInfo = chartsConfig._total + sum;
    console.log(chartsData)
    return chartsData;
  }


  checklogin(username: any, passwaord: any) {
    return this.api.login(username, passwaord);
  }
  // example with mock data 
  //  get_SubmissionToBound_Report() {
  //   const mockRatioData = require('./../Mock-Data/mock-submissiontobound-ratio.json');
  //   let valuesArray = new Array();
  //   valuesArray = [mockRatioData.submission, mockRatioData.quoted, mockRatioData.bound];
  //   var chartsData = new ChartDataModel();
  //   chartsData.additionalInfo = chartsConfig._ratio + mockRatioData.submissionToBoundRatio;
  //   chartsData.description = chartsConfig._submissionToBoundRatio;
  //   chartsData.chartLabels = chartsConfig.labelsFor_SubmissionToBound_Chart;
  //   chartsData.values = valuesArray;
  //   // test api code
  //   this.api.tempcode()
  //   .subscribe(
  //     (data) => {
  //       console.log(data);
  //     }
  //   );
  //   return chartsData;
  // }

}

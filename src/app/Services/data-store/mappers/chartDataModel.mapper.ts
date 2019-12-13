import { ChartDataModel } from 'src/app/Charts/ChartModels';
import { NBPremium, SubmissionToBound_Model, LobnbPremium_Model } from '../model/nbPremium.model';
import { element } from 'protractor';
import { Injectable } from '@angular/core';
import { chartsConfig } from 'src/app/Charts/chartsConfig';
@Injectable({
    providedIn: 'root'
})
export class ChartDataModelMapper {
    public toChartDataFromNBPremium(model: NBPremium): ChartDataModel {
        let chartsdata = new ChartDataModel();
        let valuesArray = [];
        let labelsArray = [];
        if (model.spans != undefined) {
            model.spans.forEach(ele => {
                valuesArray.push(ele.totalPremium)
            });
            model.spans.forEach(element => {
                labelsArray.push(element.spanName)
            });
        }
        chartsdata.values = valuesArray;
        chartsdata.chartLabels = labelsArray;
        chartsdata.barlabel = 'Total Premium';
        chartsdata.additionalInfo = chartsConfig._avgNBPremiumText + model.averagePremium;
        chartsdata.description = chartsConfig._headingForMonthlyPremium
        return chartsdata;
    }
    public toChartDataFromSubmissionBound(model: SubmissionToBound_Model): ChartDataModel {
        let chartsdata = new ChartDataModel();
        let valuesArray = [];
        if (model != undefined) {
            valuesArray.push(model.submission)
            valuesArray.push(model.quoted)
            valuesArray.push(model.bound)
        }
        chartsdata.values = valuesArray;
        chartsdata.chartLabels = chartsConfig.labelsFor_SubmissionToBound_Chart;
        chartsdata.additionalInfo == chartsConfig._ratio + model.submissionToBoundRatio;
        chartsdata.description = chartsConfig._submissionToBoundRatio;
        return chartsdata;
    }
    public toChartDataFromLobNew(model: LobnbPremium_Model[]): ChartDataModel {
        let chartsdata = new ChartDataModel();
        let valuesArray = [];
        let labelsArray = [];
        var sum = 0;
        if (model != undefined) {
            model.forEach(element=>{
                valuesArray.push(element.premium);
                labelsArray.push(element.description); 
                sum = sum + element.premium
            })
        }
        chartsdata.values = valuesArray;
        chartsdata.chartLabels = labelsArray;
        chartsdata.additionalInfo = chartsConfig._total + sum;
        chartsdata.description = chartsConfig._LobReport;
        return chartsdata;
    }
}
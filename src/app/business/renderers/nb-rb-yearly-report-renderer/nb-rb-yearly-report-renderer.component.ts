import { Component, OnInit, Input } from '@angular/core';
import { PieChartDataModel } from 'src/app/ng-charts/models/pie-chart-data.model';
import { DataStoreService } from 'src/app/Services/data-store/data-store-service/data-store.service';
import { DataModelMapper } from './data-model.mapper';
import { DoughnutChartDataModel } from 'src/app/ng-charts/models/doughnut-chart-data.models';
import { NBorRBPremium } from 'src/app/Services/data-store/model/nbPremium.model';
import { element } from 'protractor';

@Component({
  selector: 'nb-rb-yearly-report-renderer',
  templateUrl: './nb-rb-yearly-report-renderer.component.html',
  styleUrls: ['./nb-rb-yearly-report-renderer.component.scss'],
  providers:[DataModelMapper]
})
export class NbRbYearlyReportRendererComponent implements OnInit {

  chartData: DoughnutChartDataModel;
  ratio: Number = 0;
  additionalInfoText = 'Ratio : ';
  additionalInfo: string ;

  @Input() public fromDate: Date ;
  @Input() public toDate: Date;

  constructor(private dataStore: DataStoreService, private mapper: DataModelMapper) { }


  ngOnInit() {
    this.loadData(this.fromDate,this.toDate);
  }
  ngOnChanges(): void {
    this.loadData(this.fromDate,this.toDate);
  }

  private loadData(from : Date, to:Date) {
    var sum = 0;
    // this.chartData.datasets=[[11,21,81],[22,15,71]]
   var firstArr =  this.loadForCurrentYear(from,to);
   var secArr =  this.loadForCurrentYear(new Date('2018/06/03'),new Date('2018/12/03'));
   secArr = [65421,45212]
   this.chartData.datasets = [firstArr,secArr];
   this.chartData.labels= ['New Business Premium','Renewal Business Premium'];
   console.log(this.chartData.datasets)

    
  }
  loadForCurrentYear(from: Date, to : Date){
    let values =[];
    //this.chartData.datasets=[[12,9,14],[6,13,20]];
    this.dataStore.getNBPremiumDetails(from, to).subscribe(x => {
      values = this.mapper.setValuesArray(values,x);         
     });
     this.dataStore.getRBPremiumDetails(from, to).subscribe(x => {
      values =    this.mapper.setValuesArray(values,x);
      console.log(this.chartData);
      });
     return values;

  }
}

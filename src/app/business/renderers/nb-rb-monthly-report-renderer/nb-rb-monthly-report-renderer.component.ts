import { Component, OnInit, Input } from '@angular/core';
import { DataStoreService } from '../../../Services/data-store/data-store-service/data-store.service';
import { NgChartDataModel } from '../../../ng-charts/models/ng-chart-data.model';
import { DataModelMapper} from './data-model.mapper'
import { element } from 'protractor';

@Component({
  selector: 'nb-rb-monthly-report-renderer',
  templateUrl: './nb-rb-monthly-report-renderer.component.html',
  styleUrls: ['./nb-rb-monthly-report-renderer.component.scss'],
  providers:[DataModelMapper]
})
export class NbRbMonthlyReportRendererComponent implements OnInit {

  chartData: NgChartDataModel;
  average: Number = 0;
  additionalInfo: string;
  additionalInfoText='Average :';
  @Input() public fromDate: Date ;
  @Input() public toDate: Date;

  constructor(private dataStore: DataStoreService, private mapper: DataModelMapper) { }


  ngOnInit() {
    this.loadData(this.fromDate,this.toDate);
  }
  ngOnChanges(): void {
    this.loadData(this.fromDate,this.toDate);
  }

  private loadData(from : Date, to:Date){
    this.dataStore.getRBPremiumDetails(from,to).subscribe(x => {
      this.average = x.averagePremium;
      this.additionalInfo = this.additionalInfoText + this.average;
      this.chartData = this.mapper.toDataModel(x);
      this.dataStore.getNBPremiumDetails(from,to).subscribe(x=>{
        let secondaryData = [];
        x.spans.forEach(element=>{
          secondaryData.push(element.totalPremium)
        })
        this.chartData.datasets[1] = {        
          data : secondaryData,label:'New Business Premium'
        };
      })
    });
   
}
}
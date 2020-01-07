import { Component, OnInit, Input } from '@angular/core';
import { DataModelMapper } from './data-model.mapper';
import { DataStoreService } from '../../../Services/data-store/data-store-service/data-store.service';
import { NgChartDataModel } from '../../../ng-charts/models/ng-chart-data.model';

@Component({
  selector: 'nb-premium-renderer',
  templateUrl: './nb-premium-renderer.component.html',
  styleUrls: ['./nb-premium-renderer.component.scss'],
  providers: [DataModelMapper]
})
export class NbPremiumRendererComponent implements OnInit {
  chartData: NgChartDataModel;
  average: Number = 0;
  additionalInfo: string;
  additionalInfoText = 'Average :';
  
  @Input() public fromDate: Date ;
  @Input() public toDate: Date;
  constructor(private mapper: DataModelMapper, private dataStore: DataStoreService) { }

  ngOnInit() {
    this.loadData(this.fromDate,this.toDate);
  }
  ngOnChanges() {
    this.loadData(this.fromDate,this.toDate);
  }

  private loadData(from : Date, to:Date) {
    this.dataStore.getNBPremiumDetails(from,to).subscribe(x => {
      this.average = x.averagePremium;
      this.additionalInfo = this.additionalInfoText + this.average;
      this.chartData = this.mapper.toDataModel(x);
    });
  }

}

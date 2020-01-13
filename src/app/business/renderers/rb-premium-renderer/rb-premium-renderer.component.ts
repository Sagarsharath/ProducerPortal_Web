import { Component, OnInit, Input } from '@angular/core';
import { DataStoreService } from '../../../Services/data-store/data-store-service/data-store.service';
import { NgChartDataModel } from '../../../ng-charts/models/ng-chart-data.model';
import { DataModelMapper} from './data-model.mapper'

@Component({
  selector: 'rb-premium-renderer',
  templateUrl: './rb-premium-renderer.component.html',
  styleUrls: ['./rb-premium-renderer.component.scss'],
  providers: [DataModelMapper]
})
export class RbPremiumRendererComponent implements OnInit {
  chartData: NgChartDataModel;
  average: Number = 0;
  additionalInfo: string;
  additionalInfoText='Average : ';
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
    this.dataStore.getRBPremiumDetails(from,to).subscribe(x => {
      this.average = x.averagePremium;
      this.additionalInfo = this.additionalInfoText + this.average;
      this.chartData = this.mapper.toDataModel(x);
    });
  }

}

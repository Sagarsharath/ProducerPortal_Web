import { Component, OnInit, Input } from '@angular/core';
import { PieChartDataModel } from 'src/app/ng-charts/models/pie-chart-data.model';
import { DataStoreService } from 'src/app/Services/data-store/data-store-service/data-store.service';
import { DataModelMapper } from './data-model.mapper';

@Component({
  selector: 'lob-rb-premium-renderer',
  templateUrl: './lob-rb-premium-renderer.component.html',
  styleUrls: ['./lob-rb-premium-renderer.component.scss'],
  providers: [DataModelMapper]
})
export class LobRbPremiumRendererComponent implements OnInit {

  chartData: PieChartDataModel;
  sum: number = 0;
  additionalInfo: string;
  additionalInfoText = 'Total Premium : ';
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
    this.sum = 0;
    this.dataStore.get_LOB_rbpremium(from, to).subscribe(x => {
      this.chartData = this.mapper.toDataModel(x);
      x.forEach(element => {
        this.sum = this.sum + element.premium;
      });
      this.additionalInfo = this.additionalInfoText + this.sum;
    });

  }

}

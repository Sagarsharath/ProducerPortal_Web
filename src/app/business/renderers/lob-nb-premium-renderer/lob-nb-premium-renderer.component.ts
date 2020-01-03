import { Component, OnInit } from '@angular/core';
import { PieChartDataModel } from 'src/app/ng-charts/models/pie-chart-data.model';
import { DataStoreService } from 'src/app/Services/data-store/data-store-service/data-store.service';
import { DataModelMapper } from './data-model.mapper';

@Component({
  selector: 'lob-nb-premium-renderer',
  templateUrl: './lob-nb-premium-renderer.component.html',
  styleUrls: ['./lob-nb-premium-renderer.component.scss'],
  providers: [DataModelMapper]
})
export class LobNbPremiumRendererComponent implements OnInit {
  chartData: PieChartDataModel;
  sum: number = 0;
  additionalInfo: string;
  additionalInfoText='Total Premium : ';
  constructor(private dataStore: DataStoreService, private mapper: DataModelMapper) {
  }

  ngOnInit() {
    this.loadData();
  }

  private loadData() {

    this.dataStore.get_LOB_nbpremium().subscribe(x => {
      this.chartData = this.mapper.toDataModel(x);
      x.forEach(element => {
        this.sum = this.sum + element.premium;
        this.additionalInfo = this.additionalInfoText + this.sum;
      });
    });

    

  }

}

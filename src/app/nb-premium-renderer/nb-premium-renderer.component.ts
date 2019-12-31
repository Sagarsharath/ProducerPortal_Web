import { Component, OnInit } from '@angular/core';
import { DataModelMapper } from './data-model.mapper';
import { DataStoreService } from '../Services/data-store/data-store-service/data-store.service';
import { ChartDataModel } from '../Charts/ChartModels';
import { NgChartDataModel } from '../ng-charts/models/ng-chart-data.model';

@Component({
  selector: 'nb-premium-renderer',
  templateUrl: './nb-premium-renderer.component.html',
  styleUrls: ['./nb-premium-renderer.component.scss']
})
export class NbPremiumRendererComponent implements OnInit {
  chartData: NgChartDataModel;
  average: Number = 0;
  constructor(private mapper: DataModelMapper, private dataStore: DataStoreService) { }

  ngOnInit() {
    this.loadData();
  }

  private loadData() {
    this.dataStore.getNBPremiumDetails().subscribe(x => {
      this.average = x.averagePremium;
      this.chartData = this.mapper.toDataModel(x);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { PieChartDataModel } from 'src/app/ng-charts/models/pie-chart-data.model';
import { DataStoreService } from 'src/app/Services/data-store/data-store-service/data-store.service';
import { DataModelMapper } from './data-model.mapper';

@Component({
  selector: 'bound-ratio-renderer',
  templateUrl: './bound-ratio-renderer.component.html',
  styleUrls: ['./bound-ratio-renderer.component.scss'],
  providers:[DataModelMapper]
})
export class BoundRatioRendererComponent implements OnInit {
  chartData: PieChartDataModel;
  ratio: Number = 0;
  additionalInfoText = 'Ratio : ';
  additionalInfo: string ;

  constructor(private dataStore: DataStoreService, private mapper: DataModelMapper) { }

  ngOnInit() {
    this.loadData();
  }

  private loadData() {
    this.dataStore.get_SubmissionToBound_Report().subscribe(x => {
      this.chartData = this.mapper.toDataModel(x);
      this.additionalInfo = this.additionalInfoText + x.submissionToBoundRatio;
    });

  }

}

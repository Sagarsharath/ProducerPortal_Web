import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { PieChartDataModel } from 'src/app/ng-charts/models/pie-chart-data.model';
import { DataStoreService } from 'src/app/Services/data-store/data-store-service/data-store.service';
import { DataModelMapper } from './data-model.mapper';

@Component({
  selector: 'bound-ratio-renderer',
  templateUrl: './bound-ratio-renderer.component.html',
  styleUrls: ['./bound-ratio-renderer.component.scss'],
  providers:[DataModelMapper]
})
export class BoundRatioRendererComponent implements OnInit,OnChanges {

  chartData: PieChartDataModel;
  ratio: Number = 0;
  additionalInfoText = 'Quote to Bound Ratio : ';
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
    this.dataStore.get_SubmissionToBound_Report(from,to).subscribe(x => {
      this.chartData = this.mapper.toDataModel(x);
      this.additionalInfo = this.additionalInfoText + x.quoteToBoundRatio;
    });

  }

}

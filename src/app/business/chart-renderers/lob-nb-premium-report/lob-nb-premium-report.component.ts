import { Component, OnInit, Input } from '@angular/core';
import { DataModelMapper } from './data-model.mapper';
import { DataStoreService } from 'src/app/Services/data-store/data-store-service/data-store.service';
import { PieChartDataModel } from 'src/app/ng-charts/models/pie-chart-data.model';

@Component({
  selector: 'lob-nb-premium-report',
  templateUrl: './lob-nb-premium-report.component.html',
  styleUrls: ['./lob-nb-premium-report.component.scss'],
  providers: [DataModelMapper]
})
export class LobNbPremiumReportComponent implements OnInit {
  chartData: PieChartDataModel;
  average: Number = 0;
  
  @Input() public fromDate: Date ;
  @Input() public toDate: Date;
  constructor( private mapper: DataModelMapper,private dataStore: DataStoreService) { }

  ngOnInit() {
    this.loadData(this.fromDate,this.toDate);
  }
  ngOnChanges(): void {
    this.loadData(this.fromDate,this.toDate);
  }

  private loadData(from : Date, to:Date){
    this.dataStore.get_LOB_nbpremium(from,to).subscribe(x => {
      this.chartData = this.mapper.toDataModel(x);      
    });    

  }
}

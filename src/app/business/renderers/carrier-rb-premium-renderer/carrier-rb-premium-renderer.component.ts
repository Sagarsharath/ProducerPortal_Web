import { Component, OnInit, Input } from '@angular/core';
import { PieChartDataModel } from 'src/app/ng-charts/models/pie-chart-data.model';
import { DataStoreService } from 'src/app/Services/data-store/data-store-service/data-store.service';
import { DataModelMapper } from './data-model.mapper';
import { element } from 'protractor';

@Component({
  selector: 'carrier-rb-premium-renderer',
  templateUrl: './carrier-rb-premium-renderer.component.html',
  styleUrls: ['./carrier-rb-premium-renderer.component.scss'],
  providers:[DataModelMapper]
})
export class CarrierRbPremiumRendererComponent implements OnInit {
  chartData: PieChartDataModel;
  ratio: Number = 0;
  additionalInfoText = 'Total Premium : ';
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
    this.dataStore.get_Carrier_rbpremium(from,to).subscribe(x => {
      this.chartData = this.mapper.toDataModel(x)
     this.chartData.datasets.forEach(element=>{
      sum = sum+element
      })
      this.additionalInfo = this.additionalInfoText + sum;
    });
  }
}

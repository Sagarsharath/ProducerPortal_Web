import { Component, OnInit, Input } from '@angular/core';
import { DataModelMapper } from './data-model.mapper';
import { DataStoreService } from '../../../Services/data-store/data-store-service/data-store.service';
import { NgChartDataModel } from '../../../ng-charts/models/ng-chart-data.model';
import { PieChartDataModel } from 'src/app/ng-charts/models/pie-chart-data.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'nb-rb-comparision-report-renderer',
  templateUrl: './nb-rb-comparision-report-renderer.component.html',
  styleUrls: ['./nb-rb-comparision-report-renderer.component.scss'],
  providers:[DataModelMapper]
})
export class NbRbComparisionReportRendererComponent implements OnInit {

  chartData: PieChartDataModel;
  ratio: number = 0;
  additionalInfo: string;
  additionalInfoText = 'Ratio :';
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
    
    this.dataStore.getNBPremiumDetails(from,to).subscribe(x => {
      this.chartData = new PieChartDataModel();
      this.chartData = this.mapper.toDataModel(x,this.chartData,'New Business Premium');
      
    this.dataStore.getRBPremiumDetails(from,to).subscribe(y=>{
      this.chartData = this.mapper.toDataModel(y,this.chartData,'Renewal Business Premium');
      var numerator:any = x.averagePremium;
      var denom:any = y.averagePremium;
      this.ratio = (numerator/denom)
      this.additionalInfo = this.additionalInfoText+this.ratio.toFixed(2);
      
    })
    });
    
  }
  

}

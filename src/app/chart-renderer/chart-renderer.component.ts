import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { DataLoaderService } from './../Services/data-loader.service';
import { chartToRender} from './../Charts/chartsConfig';

@Component({
  selector: 'app-chart-renderer',
  templateUrl: './chart-renderer.component.html',
  styleUrls: ['./chart-renderer.component.scss']
})
export class ChartRendererComponent implements OnInit {

  public dataVal: any;
  @Input() reports: any;

  constructor(
  ) {

  }
  ngOnInit() {
    this.loadData();
  }
  loadData() {
  
    var loader = new DataLoaderService()
    if (this.reports == chartToRender.MonthlyPremium) {
      this.dataVal = loader.get_NewBusinessData_Report();
    }
    else if(this.reports == chartToRender.SubmissionToBound){
      this.dataVal = loader.get_SubmissionToBound_Report();
      console.log(this.dataVal)
    }
     else if(this.reports == chartToRender.LOBRenewal) {
      this.dataVal = loader.get_LOB_NBRenewal_Report();
     }

  }

}

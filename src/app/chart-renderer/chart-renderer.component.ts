import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { DataLoaderService } from './../Services/data-loader.service';
import { chartToRender} from './../Charts/chartsConfig';
import { DataStoreService } from '../Services/data-store/data-store-service/data-store.service';

@Component({
  selector: 'app-chart-renderer',
  templateUrl: './chart-renderer.component.html',
  styleUrls: ['./chart-renderer.component.scss']
})
export class ChartRendererComponent implements OnInit {

  public dataVal: any;
  @Input() reports: any;
  constructor( private loader :DataLoaderService,private dataStore:DataStoreService
  ) {
    
  }
  ngOnInit() {
    this.loadData();
  }
  loadData() {
    if (this.reports == chartToRender.MonthlyPremium) {
      //this.loader.get_NewBusinessData_Report(this.dataVal);
      this.dataStore.getNBPremiumDetails().subscribe(x=> {
        this.dataVal = x;
      });


    }
    else if(this.reports == chartToRender.SubmissionToBound){
      this.dataVal = this.loader.get_SubmissionToBound_Report();
    }
     else if(this.reports == chartToRender.LOBRenewal) {
      this.dataVal = this.loader.get_LOB_NBRenewal_Report();
     }

  }

  

}

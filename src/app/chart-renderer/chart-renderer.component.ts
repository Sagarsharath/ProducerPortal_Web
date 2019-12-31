import { Component, OnInit, ViewChild, Input } from '@angular/core';
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
  spinner = false;
  constructor( private dataStore:DataStoreService
  ) {
    
  }
  ngOnInit() {
    this.spinner = true;
    this.loadData();
    this.spinner = false;
  }
  loadData() {
    if (this.reports == chartToRender.MonthlyPremium) {
    //  this.dataStore.authenticate("100040");
     this.dataStore.getNBPremiumDetails().subscribe(x=> {
        this.dataVal = x;
      },
      (error)=>{
        console.log(error)
      });
      console.log(this.dataVal);
    }
    else if(this.reports == chartToRender.SubmissionToBound){
      this.dataStore.get_SubmissionToBound_Report().subscribe(x=> {
        this.dataVal = x;
        console.log(x)
      });
    }
     else if(this.reports == chartToRender.LOBRenewal) {
      this.dataStore.get_LOB_nbpremium().subscribe(x=> {
        this.dataVal = x;
        console.log(x)
      });
     }

  }

  

}

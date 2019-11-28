import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { DataLoaderService } from './../Services/data-loader.service';
import { element } from 'protractor';
import { customizerDataModel } from './../Charts/ChartModels';

@Component({
  selector: 'app-chart-renderer',
  templateUrl: './chart-renderer.component.html',
  styleUrls: ['./chart-renderer.component.scss']
})
export class ChartRendererComponent implements OnInit {

  public dataVal: any;
  @Input() reports: any//= new Array();

  constructor(
    private dataLoadObj: DataLoaderService,
    private custumData: customizerDataModel,
  ) {

  }
  ngOnInit() {
    this.loadData();
  }
  loadData() {

    // Need to be seggregated based on chart type...

    if (this.reports == 'bar') {
      this.dataVal = this.dataLoadObj.get_NewBusinessData_Report();
    }
    else {
      
      this.dataVal = this.dataLoadObj.get_SubmissionToBound_Report();
    }

  }

}

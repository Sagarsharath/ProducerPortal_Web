import { Component, OnInit, ViewChild } from '@angular/core';
import { DataLoaderService } from './../Services/data-loader.service';
import { element } from 'protractor';
import {  customizerDataModel } from './../Charts/ChartModels';

@Component({
  selector: 'app-chart-renderer',
  templateUrl: './chart-renderer.component.html',
  styleUrls: ['./chart-renderer.component.scss']
})
export class ChartRendererComponent implements OnInit {

  public dataVal: any;

  constructor(
    private data: DataLoaderService,
    private custumData: customizerDataModel,
  ) {

    this.loadData();
    
  }
  ngOnInit() {
    
  }
  loadData() {

    // Need to be seggregated based on chart type...
    this.custumData.bar = true;
    this.custumData.description = 'This is bar chart';
    this.custumData.additionalInfo = 'some data info';
    this.custumData.bar = true; // need to change these two lines to automatically modify
    this.dataVal = this.data.getBarChartsData();
  }

}

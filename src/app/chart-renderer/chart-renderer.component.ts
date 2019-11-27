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
    
    this.dataVal = this.data.getNewBusinessData();

  }

}

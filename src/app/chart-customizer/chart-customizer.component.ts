import { Component, OnInit, ViewChild, Input,ComponentFactoryResolver,Type,ComponentFactory,ViewContainerRef,ComponentRef, Injectable } from '@angular/core';
import { BarChartComponent } from '../Charts/bar-chart/bar-chart.component';
import { AddChartDirective } from './../add-chart.directive';
import { customizerDataModel } from './../Charts/ChartModels';

@Component({
  selector: 'chart-customizer',
  templateUrl: './chart-customizer.component.html',
  styleUrls: ['./chart-customizer.component.scss']
})
export class ChartCustomizerComponent implements OnInit {
 
  @Input() dataChild : any;
  @Input() childReport : any;
  @Input() desc : any;
  public loadBar =false;
  public loadPie =false;
   constructor(
  ) {
        
  }


  ngOnInit() {
   
  }
 
  
}



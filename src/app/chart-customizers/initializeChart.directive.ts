import { OnInit, OnChanges, Directive, ComponentFactoryResolver, ViewContainerRef, ComponentRef, Input, Type } from '@angular/core';
import { BarChartComponent } from '../ng-charts/bar-chart/bar-chart.component';
import { NgChartDataModel } from '../ng-charts/models/ng-chart-data.model';
import { IChartComponent } from '../ng-charts/models/chart-component.interface';


const charts: { [type: string]: Type<IChartComponent> } = {
  'bar-chart': BarChartComponent
}

@Directive({
  selector: '[initializeChart]'
})
export class InitializeChart implements OnInit, OnChanges {
  component: ComponentRef<IChartComponent>;
  @Input()
  chartType: string;

  @Input()
  chartData: NgChartDataModel;
  constructor(private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef) {

  }
  ngOnInit() {

    if (!charts[this.chartType]) {
      const supportedCharts = Object.keys(charts).join(', ');
      throw new Error(
        `Un supported Chart (${this.chartType}),
        Supported Charts are : ${supportedCharts}`
      )
    };

    let componentType = charts[this.chartType];

    const factory = this.resolver.resolveComponentFactory<any>(componentType);
    this.component = this.container.createComponent(factory);
    this.setChartData();
  }
  ngOnChanges() {
    if (this.component) {
      this.setChartData();
    }
  }

  private setChartData() {
    if (this.chartData != undefined) {
      this.component.instance.chartData = this.chartData;
    }

  }
}


import { Directive, Input, OnInit, ComponentFactoryResolver, ViewContainerRef, Type, OnChanges, ComponentRef } from '@angular/core'
import { BarChartComponent } from './Charts/bar-chart/bar-chart.component';
import { PieChartComponent } from './Charts/pie-chart/pie-chart.component';
import { ChartDescriptorComponent } from './chart-descriptor/chart-descriptor.component'

@Directive({
  selector: '[appAddChart]'
})
export class AddChartDirective {
  @Input() data: any;
  @Input() chart: any;
  component: ComponentRef<BarChartComponent>;
  component1: ComponentRef<PieChartComponent>;
  component2: ComponentRef<ChartDescriptorComponent>;
  constructor(private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef) {

  }
  ngOnInit() {
    const componentType2 = ChartDescriptorComponent;
    const factory2 = this.resolver.resolveComponentFactory<any>(componentType2);
    this.component2 = this.container.createComponent(factory2);

    if (this.chart == "bar") {
     
      //customizer
      this.component2.instance.description = this.data.barChartDescription;
      this.component2.instance.additionalInfo = this.data.barChartAdditionalInfo;
      //chart
      const componentType = BarChartComponent;
      const factory = this.resolver.resolveComponentFactory<any>(componentType);
      this.component = this.container.createComponent(factory);
      this.component.instance.barChartData = this.data.barChartValues;
      this.component.instance.barChartLabels = this.data.barChartLabels;
      
    }
    else {
      //customizer
      this.component2.instance.description = this.data.pieChartDescription;
      this.component2.instance.additionalInfo = this.data.pieChartAdditionalInfo;
      //chart
      const componentType = PieChartComponent;
      const factory = this.resolver.resolveComponentFactory<any>(componentType);
      this.component1 = this.container.createComponent(factory);
      this.component1.instance.pieChartData = this.data.pieChartValues;
      this.component1.instance.pieChartLabels = this.data.pieChartLabels;
      

    }

  }
}

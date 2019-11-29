
import { Directive, Input, OnInit, ComponentFactoryResolver, ViewContainerRef, Type, OnChanges, ComponentRef } from '@angular/core'
import { BarChartComponent } from './Charts/bar-chart/bar-chart.component';
import { PieChartComponent } from './Charts/pie-chart/pie-chart.component';
import { ChartDescriptorComponent } from './chart-descriptor/chart-descriptor.component';
import { LineChartComponent} from './Charts/line-chart/line-chart.component'

@Directive({
  selector: '[appAddChart]'
})
export class AddChartDirective {
  @Input() data: any;
  @Input() chart: any;
  barChartComp: ComponentRef<BarChartComponent>;
  pieChartComp: ComponentRef<PieChartComponent>;
  descriptorComp: ComponentRef<ChartDescriptorComponent>;
  linechart: ComponentRef<LineChartComponent>;
  constructor(private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef) {

  }
  ngOnInit() {
    const componentType2 = ChartDescriptorComponent;
    const factory2 = this.resolver.resolveComponentFactory<any>(componentType2);
    this.descriptorComp = this.container.createComponent(factory2);

    if (this.chart == "bar") {
     
      //customizer
      this.descriptorComp.instance.description = this.data.barChartDescription;
      this.descriptorComp.instance.additionalInfo = this.data.barChartAdditionalInfo;
      //chart
      const componentType = BarChartComponent;
      const factory = this.resolver.resolveComponentFactory<any>(componentType);
      this.barChartComp = this.container.createComponent(factory);
      this.barChartComp.instance.barChartData = this.data.barChartValues;
      this.barChartComp.instance.barChartLabels = this.data.barChartLabels;
      
    }
    else if(this.chart == "pie"){
      //customizer
      this.descriptorComp.instance.description = this.data.pieChartDescription;
      this.descriptorComp.instance.additionalInfo = this.data.pieChartAdditionalInfo;
      //chart
      const componentType = PieChartComponent;
      const factory = this.resolver.resolveComponentFactory<any>(componentType);
      this.pieChartComp = this.container.createComponent(factory);
      this.pieChartComp.instance.pieChartData = this.data.pieChartValues;
      this.pieChartComp.instance.pieChartLabels = this.data.pieChartLabels;
      

    }
    else{
      // TODO
      // Temporarily data is recieving same  as premium report bar graph, need to change it later...
      //customizer
      this.descriptorComp.instance.description = this.data.barChartDescription;
      this.descriptorComp.instance.additionalInfo = this.data.barChartAdditionalInfo;
      //chart
      const componentType = LineChartComponent;
      const factory = this.resolver.resolveComponentFactory<any>(componentType);
      this.linechart = this.container.createComponent(factory);
      this.linechart.instance.lineChartData = this.data.barChartValues;
      this.linechart.instance.lineChartLabels = this.data.barChartLabels;
    }

  }
}

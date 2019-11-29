
import { Directive, Input, OnInit, ComponentFactoryResolver, ViewContainerRef, Type, OnChanges, ComponentRef } from '@angular/core'
import { chartToRender } from './Charts/chartsConfig'
import { BarChartComponent } from './Charts/bar-chart/bar-chart.component';
import { PieChartComponent } from './Charts/pie-chart/pie-chart.component';
import { ChartDescriptorComponent } from './chart-descriptor/chart-descriptor.component';
import { LineChartComponent } from './Charts/line-chart/line-chart.component'

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


    if (this.chart == chartToRender.MonthlyPremium) {

      this.setCustomizer(this.data.barChartDescription, this.data.barChartAdditionalInfo)

      //chart
      var factory = this.resolver.resolveComponentFactory<any>(BarChartComponent);
      this.barChartComp = this.container.createComponent(factory);
      this.barChartComp.instance.barChartData = this.data.barChartValues;
      this.barChartComp.instance.barChartLabels = this.data.barChartLabels;

    }
    else if (this.chart == chartToRender.SubmissionToBound || this.chart == chartToRender.LOBRenewal) {

      this.setCustomizer(this.data.pieChartDescription, this.data.pieChartAdditionalInfo)

      //chart      
      var factory = this.resolver.resolveComponentFactory<any>(PieChartComponent);
      this.pieChartComp = this.container.createComponent(factory);
      this.pieChartComp.instance.pieChartData = this.data.pieChartValues;
      this.pieChartComp.instance.pieChartLabels = this.data.pieChartLabels;


    }

  }
  //sets the customizer component based on data
  setCustomizer(description: any, addInfo: any) {
    
    const componentType2 = ChartDescriptorComponent;
    const factory2 = this.resolver.resolveComponentFactory<any>(componentType2);
    this.descriptorComp = this.container.createComponent(factory2);
    this.descriptorComp.instance.description = description;
    this.descriptorComp.instance.additionalInfo = addInfo;

  }
}

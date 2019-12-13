
import { Directive, Input, OnInit, ComponentFactoryResolver, ViewContainerRef, Type, OnChanges, ComponentRef } from '@angular/core'
import { chartToRender } from './Charts/chartsConfig'
import { BarChartComponent } from './Charts/bar-chart/bar-chart.component';
import { PieChartComponent } from './Charts/pie-chart/pie-chart.component';
import { ChartDescriptorComponent } from './chart-descriptor/chart-descriptor.component';
import { LineChartComponent } from './Charts/line-chart/line-chart.component';
import { defaultColors } from './Charts/ChartModels';

@Directive({
  selector: '[appAddChart]'
})
export class AddChartDirective implements OnInit, OnChanges {
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
    this.initializeCharts();
  }
  ngOnChanges(){
    this.initializeCharts();
  }

  private initializeCharts(){
    if (this.chart == chartToRender.MonthlyPremium && this.data != undefined) {

      this.setCustomizer(this.data.description, this.data.additionalInfo)
      //chart
      var factory = this.resolver.resolveComponentFactory<any>(BarChartComponent);
      this.barChartComp = this.container.createComponent(factory);
      this.barChartComp.instance.barChartData = [
        {
          data: this.data.values, label: this.data.barlabel, backgroundColor: defaultColors.RGB[9], // barThickness: 15, maxBarThickness: 35,
        }
      ]
      this.barChartComp.instance.barChartLabels = this.data.chartLabels;

    }
    else if (this.chart == chartToRender.SubmissionToBound && this.data != undefined || this.chart == chartToRender.LOBRenewal && this.data != undefined) {

      this.setCustomizer(this.data.description, this.data.additionalInfo)

      //chart      
      var factory = this.resolver.resolveComponentFactory<any>(PieChartComponent);
      this.pieChartComp = this.container.createComponent(factory);
      this.pieChartComp.instance.pieChartData = this.data.values;
      this.pieChartComp.instance.pieChartLabels = this.data.chartLabels;
    }
  }
  //sets the customizer component based on data
  setCustomizer(description: any, addInfo: any) {

    const factory2 = this.resolver.resolveComponentFactory<any>(ChartDescriptorComponent);
    this.descriptorComp = this.container.createComponent(factory2);
    this.descriptorComp.instance.description = description;
    this.descriptorComp.instance.additionalInfo = addInfo;

  }
}
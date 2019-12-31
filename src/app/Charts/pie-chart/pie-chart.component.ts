import { Component, Input } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, Colors, Color } from 'ng2-charts';
import { defaultColors } from './../ChartModels'
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
@Component({
  selector: 'pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})

export class PieChartComponent {

  public pieChartOptions: ChartOptions = {
    responsive: true,
    
  };
  @Input() name: string;
  @Input() pieChartLabels: Label[] ;
  @Input() pieChartData: SingleDataSet ;
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartColors = [
    {
       backgroundColor: defaultColors.RGB
    },
  ];
  public chartOption = {
    legend: { position: 'left' ,
    labels: {
     fontColor: '#ffffff', 
    },},
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          return value;
        },
      },
    },
    tooltips: {
      custom: function(tooltip) {
        if (!tooltip) return;
        tooltip.displayColors = false;
      },
      callbacks: {          
          label: function(tooltipItem, data) {
                var sum =0;
                data.datasets[0].data.forEach(element => {
                  sum = sum + element;
                });
                 var currVal = data.datasets[0].data[tooltipItem.index]
                 var percentage  = ((currVal/sum)*100).toFixed(2)
                 var label= data.labels[tooltipItem.index]+" : "+currVal+" ("+ percentage+"%)";
                 return label;    
              }
            }  
         },
                 
      }
  public pieChartPlugins = [pluginDataLabels];
  constructor() {

  }
}

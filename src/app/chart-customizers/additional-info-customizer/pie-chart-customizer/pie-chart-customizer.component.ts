import { Component, OnInit, Input } from '@angular/core';
import { PieChartDataModel } from 'src/app/ng-charts/models/pie-chart-data.model';
import { ChartLegendOptions, ChartPluginsOptions, ChartTooltipOptions, ChartOptions, plugins } from 'chart.js';
import { Colors, defaultColors } from 'ng2-charts';

@Component({
  selector: 'pie-chart-customizer',
  templateUrl: './pie-chart-customizer.component.html',
  styleUrls: ['./pie-chart-customizer.component.scss']
})
export class PieChartCustomizerComponent implements OnInit {

  legend: ChartLegendOptions;
  plugins: ChartPluginsOptions;
  tooltips: ChartTooltipOptions;

  chartOptions: ChartOptions;

  @Input()
  chartData: PieChartDataModel;

  RGB = [
    '#a697a0',
    '#94aab5',
    '#94b59d',
    '#ad9a53',
    '#6b1616',
    '#521343',
    '#3a4d99',
    '#c68ee6',
    '#cc91bc',
    '#a16a94',
  ];

  colors = [
    {
      backgroundColor: this.RGB,
    }
  ]

  @Input()
  label: string;

  @Input()
  additionalInfo: string;

  constructor() { }

  ngOnInit() {
    this.configureChartOptions();
  }

  private configureChartOptions() {
    this.legend = {
      position: 'left',
      labels: {
        fontColor: '#ffffff',
      },
    };
    this.plugins = {
      datalabels: {
        formatter: (value, ctx) => {
          return value;
        },
      },
    };

    this.tooltips = {
      custom: function (tooltip) {
        if (!tooltip) return;
        tooltip.displayColors = false;
      },
      callbacks: {
        label: function (tooltipItem, data) {
          var sum = 0;
          data.datasets[0].data.forEach(element => {
            sum = sum + element;
          });
          var currVal = data.datasets[0].data[tooltipItem.index];
          // var percentage = ((currVal / sum) * 100).toFixed(2);
          var percentage = "";
          var label = data.labels[tooltipItem.index] + " : " + currVal + " (" + percentage + "%)";
          return label;
        }
      }
    };

    this.chartOptions = {
      responsive: true,
      legend: this.legend,
      plugins: this.plugins,
      tooltips: this.tooltips
    }
  }



}

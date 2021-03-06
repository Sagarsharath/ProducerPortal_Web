import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ChartLegendOptions, ChartPluginsOptions, ChartTooltipOptions, ChartOptions, ChartColor } from 'chart.js';
import { PieChartDataModel } from 'src/app/ng-charts/models/pie-chart-data.model';
import { DoughnutChartDataModel } from 'src/app/ng-charts/models/doughnut-chart-data.models';

@Component({
  selector: 'doughnut-chart-customizer',
  templateUrl: './doughnut-chart-customizer.component.html',
  styleUrls: ['./doughnut-chart-customizer.component.scss']
})
export class DoughnutChartCustomizerComponent implements OnInit {

  legendOptions: ChartLegendOptions;
  plugins: ChartPluginsOptions;
  tooltips: ChartTooltipOptions;

  chartOptions: ChartOptions;

  @Input()
  chartData: DoughnutChartDataModel;

  RGB = [
    '#2d75ff',
    '#c6d4f9',
    '#496db4',
    '#84e2f1',
    '#a697a0',
    '#94aab5',
    '#94b59d',
    '#ad9a53',
    '#d49d9d',
    '#9fc1c2',
    '#6a77ad',
    '#c9add9',
    '#cc91bc',
    '#a16a94',
  ];

  ChartColor = [
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

    this.tooltips = {

      custom: function (tooltip) {
        if (!tooltip) return;
        tooltip.displayColors = false;
      }
    }

    this.legendOptions = {
      align: 'end',
      position: 'right',
      labels: {
        fontColor: '#827d7d',
        boxWidth: 20
      },

    }
    // {
    //   custom: function (tooltip) {
    //     if (!tooltip) return;
    //     tooltip.displayColors = false;
    //   },
    //   callbacks: {
    //     label: function (tooltipItem, data) {
    //       var sum = 0;
    //       data.datasets[0].data.forEach(element => {
    //         sum = sum + element;
    //       });
    //       let currVal :any= data.datasets[0].data[tooltipItem.index];
    //       var percentage = ((currVal/sum)*100).toFixed(2)
    //       var label = data.labels[tooltipItem.index] + " : " + currVal + " (" + percentage + "%)";
    //       return label;
    //     }
    //    }
    // };

    this.chartOptions = {
      responsive: false,
      legend: this.legendOptions,
      tooltips: this.tooltips,
    }
  }
}
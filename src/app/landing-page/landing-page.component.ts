import { Component, OnInit } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { chartToRender} from './../Charts/chartsConfig'

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  public title  = 'bar';
  public title2 = 'pie';
  public renderComponent : string;
  public defaultCharts = chartToRender;
  events: string[] = [];
  opened: boolean;
  constructor() { }

  ngOnInit() {
  }
  changeComponent(toComponent:string){
    
    switch (toComponent) {
      case '1': this.renderComponent = this.defaultCharts.MonthlyPremium;
        break;
      case '2': this.renderComponent = this.defaultCharts.SubmissionToBound;
        break;
      case '3': this.renderComponent = this.defaultCharts.LOBRenewal;
        break;
      default : this.renderComponent = toComponent;
    }

    
  }
}

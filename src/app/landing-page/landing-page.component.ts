import { Component, OnInit } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { chartToRender } from './../Charts/chartsConfig';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  public name : string;
  public renderComponent: string;
  public defaultCharts = chartToRender;
  events: string[] = [];
  opened: boolean;

  constructor(public router: Router) { }

  ngOnInit() {
      this.name = localStorage.getItem('userFullName')
  }
  changeComponent(toComponent: string) {

    switch (toComponent) {
      case '1': this.renderComponent = this.defaultCharts.MonthlyPremium;
        break;
      case '2': this.renderComponent = this.defaultCharts.SubmissionToBound;
        break;
      case '3': this.renderComponent = this.defaultCharts.LOBRenewal;
        break;
      default: this.renderComponent = toComponent;
    }


  }
  logOut() {
    localStorage.removeItem('loggedIn')
    this.router.navigate(['/login']);

  }
}

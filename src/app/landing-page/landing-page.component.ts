import { Component, OnInit } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { chartToRender } from './../Charts/chartsConfig';
import { Router } from '@angular/router';
import { ApiServiceService } from '../Services/api-service.service';

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

  constructor(public router: Router,
    private api : ApiServiceService) { }

  ngOnInit() {
    const urlArr = this.router.url.split('/');
    const token = urlArr[urlArr.length-1];
    console.log(token);
    localStorage.setItem('token',token)
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
    localStorage.clear()
    this.router.navigate(['/login']);

  }
}

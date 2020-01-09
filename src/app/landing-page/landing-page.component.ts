import { Component, OnInit, OnChanges } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { chartToRender } from './../Charts/chartsConfig';
import { Router } from '@angular/router';
import { DataStoreService } from './../Services/data-store/data-store-service/data-store.service';
import { FormControl } from '@angular/forms';
import { LoadComponents } from './LoadComponents';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  providers:[LoadComponents]
})
export class LandingPageComponent implements OnInit {
  public AgencyName: string;
  public renderComponent = 'dashboard';
  public defaultCharts = chartToRender;
  events: string[] = [];
  opened: boolean;
  years = [new Date().getFullYear(), 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010];
  selectedYear = this.years[0];
  toDate = new FormControl((new Date((this.selectedYear + 1) + "/01/01")));
  fromDate = new FormControl((new Date(this.selectedYear + "/01/01")));

  constructor(public router: Router,
    private datastore: DataStoreService, private loadComponent: LoadComponents) { }

  ngOnInit() {
    //this.renderComponent = 'agencyContact';
    this.datastore.get_AgencyDetails().subscribe(result=>{
    this.AgencyName = result.name
    })
  }
  dsChange() {
    this.toDate = new FormControl((new Date((this.selectedYear + 1) + "/01/01")));
    this.fromDate = new FormControl((new Date(this.selectedYear + "/01/01")));
  }

  changeComponent(toComponent: string) {
    //this.loadComponent = new LoadComponents(false, false, false);
    this.loadComponent.loadDashboard
    switch (toComponent) {
      case '1': this.renderComponent = this.defaultCharts.MonthlyPremium;
        break;
      case '2': this.renderComponent = this.defaultCharts.SubmissionToBound;
        break;
      case '3': this.renderComponent = 'brochure';
        break;
        case '22': this.renderComponent = 'agencyContact';
        break;
      default: this.renderComponent = toComponent;
    }

  }
  logOut() {
    localStorage.clear();
    window.open('http://dev.cogitate.us/ssonew/Login/ClearAllCookies', '_self');
  }
}

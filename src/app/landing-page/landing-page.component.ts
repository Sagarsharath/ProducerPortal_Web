import { Component, OnInit, OnChanges } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { chartToRender } from './../Charts/chartsConfig';
import { Router } from '@angular/router';
import { DataStoreService } from './../Services/data-store/data-store-service/data-store.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  public AgencyName: string;
  public 
  public renderComponent = 'dashboard';
  public userSpecificReport = false;
  public defaultCharts = chartToRender;
  events: string[] = [];
  opened: boolean;
  panelOpenState :boolean =false;

  years = [new Date().getFullYear()-1];
  selectedYear = this.years[0];
  toDate = new FormControl((new Date((this.selectedYear + 1) + "/01/01")));
  fromDate = new FormControl((new Date(this.selectedYear + "/01/01")));
  constructor(public router: Router,
    private datastore: DataStoreService) { 
      let i: number=1;
      while(i!=10){
        this.years.push(this.years[0]-i);
        i++;
      }
      
    }

  ngOnInit() {
    this.datastore.get_AgencyDetails().subscribe(result=>{
    this.AgencyName = result.name
    })
  }
  dsChange() {
    this.toDate = new FormControl((new Date((this.selectedYear + 1) + "/01/01")));
    this.fromDate = new FormControl((new Date(this.selectedYear + "/01/01")));
  }
public collapse : boolean = false;
  openCollapsable(){
    this.collapse = true
    return  null;

  }

  setLoadComponent(){

     
  }
  changeComponent(toComponent: string, userSpecific:boolean) {
    this.renderComponent = toComponent;
    this.userSpecificReport = userSpecific;
    this.selectedYear = this.years[0];
    this.dsChange()
  }
  logOut() {
    localStorage.clear();
    window.open('http://dev.cogitate.us/ssonew/Login/ClearAllCookies', '_self');
  }
}

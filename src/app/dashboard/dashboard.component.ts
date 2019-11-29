import { Component, OnInit } from '@angular/core';
import { chartToRender } from './../Charts/chartsConfig'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public title  = 'bar';
  public title2 = 'pie';
  public chart =  chartToRender;
  constructor( ) {
    
   }
  ngOnInit() {

  }
  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { chartToRender } from '../../Charts/chartsConfig'

@Component({
  selector: 'old-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class OldDashboardComponent implements OnInit {
  
  public title  = 'bar';
  public title2 = 'pie';
  public chart =  chartToRender;
  @Input() public fromDate: Date ;
  @Input() public toDate: Date;
  constructor( ) {

   }
  ngOnInit() {

  }
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'user-specific-reports',
  templateUrl: './user-specific-reports.component.html',
  styleUrls: ['./user-specific-reports.component.scss']
})
export class UserSpecificReportsComponent implements OnInit {

  @Input() public fromDate: Date ; 
  @Input() public toDate: Date;
  @Input() public renderComponent ='';
  constructor() { }

  ngOnInit() {
    
  }

}

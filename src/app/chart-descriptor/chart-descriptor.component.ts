import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-descriptor',
  templateUrl: './chart-descriptor.component.html',
  styleUrls: ['./chart-descriptor.component.scss']
})
export class ChartDescriptorComponent implements OnInit {

  public description : any;
  public additionalInfo : any;
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chart-descriptor',
  templateUrl: './chart-descriptor.component.html',
  styleUrls: ['./chart-descriptor.component.scss']
})
export class ChartDescriptorComponent implements OnInit {

  @Input() description : any;
  @Input() additionalInfo : any;
  constructor() { }

  ngOnInit() {
  }

}

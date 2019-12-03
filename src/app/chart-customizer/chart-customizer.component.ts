import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'chart-customizer',
  templateUrl: './chart-customizer.component.html',
  styleUrls: ['./chart-customizer.component.scss']
})
export class ChartCustomizerComponent implements OnInit {
 
  @Input() dataChild : any;
  @Input() childReport : any;
  @Input() desc : any;
  public loadBar =false;
  public loadPie =false;
   constructor(
  ) {
        
  }


  ngOnInit() {
   
  }
 
  
}



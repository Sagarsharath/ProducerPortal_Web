import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title  = 'bar';
  public title2 = 'pie';
  public reqReport; // need to be changed 
  constructor(){
    this.reqReport = [1,2,3];
  }
}
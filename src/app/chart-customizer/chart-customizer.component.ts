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
  timeLeft: number = 20;
  interval;


  ngOnInit() {
    this.startTimer()
  }
  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } 
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }
 
  
}



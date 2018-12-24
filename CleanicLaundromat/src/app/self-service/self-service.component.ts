import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-self-service',
  templateUrl: './self-service.component.html',
  styleUrls: ['./self-service.component.css']
})
export class SelfServiceComponent implements OnInit {
  timeLeft: number = 0;
  hours: number = Math.floor((this.timeLeft / 3600));
  minutes: number = Math.floor((this.timeLeft / 60) / 60);
  seconds: number = Math.floor(this.timeLeft % 3600 % 60);
  time: number = this.hours + this.minutes + this.seconds;
  hr: number = Math.floor((this.timeLeft / 3600));
  min: number = Math.floor((this.timeLeft / 60) / 60);
  sec: number = Math.floor(this.timeLeft % 3600 % 60);
  interval: any;
  toggle = true;

  constructor() { }

  ngOnInit() {
  }

  startTimer(id: number) {
    if (id == 1) {
      console.log(id);
      this.timer(this.hours, this.minutes, this.seconds);
    }
    else if(id==2){
      console.log(id);
      this.toggle = !this.toggle;
      //this.hours = 0;
      //this.minutes = 0;
     // this.seconds = 0;
      this.timer(this.hours=0, this.minutes=0, this.seconds=0);

      console.log("TIME: ", this.hours+" "+this.minutes+" "+this.seconds);
      this.hr = this.hours;
      this.min = this.minutes;
      this.sec = this.seconds;
      //clearInterval(this.interval);
    }
  }

  timer(hours:number, minutes:number, seconds:number){
    console.log(hours+" "+minutes+" "+seconds);
    this.toggle = !this.toggle;
    this.interval = setInterval(() => {
      if (this.seconds < 10) {
        this.seconds++;
      }
      else {
        this.seconds = 0;
        this.minutes += 1;
      }
      if (this.minutes == 2) {
        this.seconds = 0;
        this.minutes = 0;
        this.hours += 1;
      }
    }, 1000)
    return this.seconds;
  }

}

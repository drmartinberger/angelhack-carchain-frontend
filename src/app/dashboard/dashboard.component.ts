import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public show: number;

  constructor() {
 
  }
    
  ngOnInit() {
  }
  
  switchLoc() {
      console.log('switch');

      if(this.show) {
        this.show = 0
      } else {
        this.show = 1
      }
  }
}

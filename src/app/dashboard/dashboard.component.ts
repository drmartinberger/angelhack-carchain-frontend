import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public show: number;
  public allianz: number;
  public aldi: number;
  public shell: number;

  constructor() {
    this.allianz = parseInt(sessionStorage.getItem('allianz')); 
  }
    
  ngOnInit() {
  }
  
  switchLoc() {
      console.log('switch');

      if(this.show) {
        this.show = 0;
        this.aldi = 0;
        this.shell = 0;

      } else {
        this.show = 1;
        this.aldi = 1;
        this.shell = 1;
      }
  }
}

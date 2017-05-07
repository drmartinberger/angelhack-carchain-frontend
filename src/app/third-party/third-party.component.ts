import {Component, OnInit, ViewChild} from '@angular/core';
import {GmapComponent} from "../gmap/gmap.component";

@Component({
  selector: 'app-third-party',
  templateUrl: './third-party.component.html',
  styleUrls: ['./third-party.component.css']
})
export class ThirdPartyComponent implements OnInit {
  @ViewChild('gmap') gmap: GmapComponent;

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.gmap.addMarker(Math.random() * 1 + 49, Math.random() * 1 + 10);
    }, 500);
  }



}

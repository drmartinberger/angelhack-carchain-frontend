import { Component } from '@angular/core';
import {BigchainService} from "./bigchain.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private bigchainService: BigchainService) {

  }

  ngOnInit() {

  }
}

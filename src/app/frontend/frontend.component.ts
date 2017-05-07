import { Component, OnInit } from '@angular/core';
import {BigchainService} from "../bigchain.service";

@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.css']
})
export class FrontendComponent implements OnInit {

  constructor(private bigchainService: BigchainService) { }

  ngOnInit() {
    this.bigchainService.fetchTransactions()
      .subscribe((transactionIds: string[]) => {
        console.log(transactionIds);
      });
  }

}

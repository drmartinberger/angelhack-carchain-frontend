import {Component, OnInit, ViewChild} from '@angular/core';
import {GmapComponent} from "../gmap/gmap.component";
import {BigchainService} from "../bigchain.service";

@Component({
  selector: 'app-third-party',
  templateUrl: './third-party.component.html',
  styleUrls: ['./third-party.component.css']
})
export class ThirdPartyComponent implements OnInit {
  @ViewChild('gmap') gmap: GmapComponent;

  existingTransactionIds: string[] = null;

  constructor(private bigchainService: BigchainService) {
  }

  reloadTransactions() {
    this.bigchainService.fetchTransactionIds('recipient')
      .subscribe((transactionIds: string[]) => {
        if (!this.existingTransactionIds) {
          this.existingTransactionIds = transactionIds;
        } else {
          transactionIds.forEach((transactionId: string) => {
            console.log(this.existingTransactionIds.length, transactionIds.length, "test");
            if (this.existingTransactionIds.indexOf(transactionId) === -1) { // new transaction
              console.log('new transaction');
              this.bigchainService.getTransaction(transactionId)
                .subscribe((transaction: any) => {
                  this.bigchainService.getTransaction(transaction['asset']['id'])
                    .subscribe((transaction: any) => {
                      let data = transaction.asset.data;
                      this.gmap.addMarker(data.lat, data.lon);
                    })
                })
            }

          })

          this.existingTransactionIds = transactionIds;
        }

        setTimeout(() => {
          this.reloadTransactions();
        }, 1000);
      })

    this.bigchainService.fetchCreateTransactions();
  }

  ngOnInit() {
    this.reloadTransactions();
  }


}

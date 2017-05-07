import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from "@angular/http";

@Injectable()
export class BigchainService {
  private apiPath: string = '/bigchain/api/v1/';
  private apiPathGen: string = '/generate/';

  private static senderPublicKey = 'DePKLLGt7qQ3J8kbTNow2psobziipEq8bqA4SnCm3V8K';
  private static senderPrivateKey = 'AgBBQZsZvwDfV6Em9imheF4C6JdUYi7waViEznrhUXen';

  private static recipientPublicKey = '6xFV94PJiEjNp9KhT4aXG6q5QzZH3wngR5udUVZ8ftZn';
  private static recipientPrivateKey = '3Gh2f9ozW9RdpNRCbfKTnx8YVJMeywjkUtRXfvB3Lyon';


   constructor(private http: Http) { }



  postTransferTransaction(transferTransaction: any) {
    return this.http.post(this.apiPath + 'transactions', JSON.stringify(transferTransaction))
      .map(res => res.json());
  }

  fetchTransactionIds(keyType: string = 'sender') {
     let key = BigchainService.senderPublicKey;
     if (keyType === 'recipient') {
       key = BigchainService.recipientPublicKey;
     }

    return this.http.get(this.apiPath + 'outputs?public_key=' + key + '&unspent=true')
      .map((res => res.json()))
      .map((transactions: any) => {
        let res = [];
        transactions.forEach((transaction: any) => {
          let id = transaction.split("/")[2];
          res.push(id);
        })
        return res;
      })
  }

  getTransaction(transactionId: string) {
    return this.http.get(this.apiPath + 'transactions/' + transactionId)
      .map((res => res.json()));
  }

  startGenerator() {
    return this.http.post(this.apiPathGen + 'start', null)
      .subscribe(() => {})
  }

  fetchCreateTransactions(type: string = null) {
    this.http.get(this.apiPath + 'outputs?public_key=' + BigchainService.senderPublicKey + '&unspent=true')
      .map((res => res.json()))
      .subscribe((transactions: any) => {
        transactions.forEach((transaction: any) => {
          let id = transaction.split("/")[2];

          this.http.get(this.apiPath + 'transactions/' + id)
            .map((res => res.json()))
            .subscribe((res) => {
              let headers = new Headers({ 'Content-Type': 'application/json' });
              let options = new RequestOptions({ headers: headers });

              //console.log(res);

              this.http.post(this.apiPathGen + 'transfer', JSON.stringify({
                tx: res,
                publicKey: BigchainService.recipientPublicKey,
              }), options)
                .map(res => res.json())
                .subscribe((res) => {
                  //console.log(res);
                })
            })
        })
      })
  }
}

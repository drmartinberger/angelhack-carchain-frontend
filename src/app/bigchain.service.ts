import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class BigchainService {
  private apiPath: string = '/bigchain/api/v1/';

  private static senderPublicKey = 'DePKLLGt7qQ3J8kbTNow2psobziipEq8bqA4SnCm3V8K';
  private static senderPrivateKey = 'AgBBQZsZvwDfV6Em9imheF4C6JdUYi7waViEznrhUXen';

  constructor(private http: Http) { }

  postTransferTransaction(transferTransaction: any) {
    return this.http.post(this.apiPath + 'transactions', JSON.stringify(transferTransaction))
      .map(res => res.json());
  }

  fetchCreateTransactions() {
  }
}

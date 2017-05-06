import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class BigchainService {
  private apiPath: string = '/bigchain/api/v1/';

  constructor(private http: Http) { }

  createTransaction(transaction: any) {
    return this.http.post(this.apiPath + 'create_transaction', JSON.stringify(transaction))
      .map(res => res.json());
  }

}

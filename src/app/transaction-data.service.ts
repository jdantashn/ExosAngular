
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TransactionRecord } from './transaction-record';

@Injectable({
  providedIn: 'root'
})
export class TransactionDataService {

  constructor(private http: HttpClient) { }

  getTransactionData(): Observable<TransactionRecord[]>{
    return this.http.get<TransactionRecord[]>(`../assets/transactions.json`);
  }
}


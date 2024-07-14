import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customers } from 'src/app/_modals/customers';
import { Transactions } from 'src/app/_modals/transactions';
HttpClient
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private _HttpClient:HttpClient) { }

  loadCustomers() {
    return this._HttpClient.get<Customers[]>('http://localhost:3000/customers'); 
  }
  loadTransactions() {
    return this._HttpClient.get<Transactions[]>('http://localhost:3000/transactions'); 
  }
}

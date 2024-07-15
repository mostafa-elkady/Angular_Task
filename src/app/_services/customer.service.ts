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
    return this._HttpClient.get<Customers[]>('https://customers-ivory.vercel.app/customers'); 
  }
  loadTransactions() {
    return this._HttpClient.get<Transactions[]>('https://customers-ivory.vercel.app/transactions'); 
  }
}

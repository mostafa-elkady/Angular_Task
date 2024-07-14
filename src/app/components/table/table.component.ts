import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Customers } from 'src/app/_modals/customers';
import { Transactions } from 'src/app/_modals/transactions';
import { CustomerService } from 'src/app/_services/customer.service';
import { FilterByCustomerIdPipe } from 'src/app/pipes/filter-by-customer-id.pipe';
import { SearchPipe } from 'src/app/pipes/search.pipe';
import { FormsModule } from "@angular/forms";
import { SearchByAmountPipe } from 'src/app/pipes/search-by-amount.pipe';
import { GraphComponent } from '../graph/graph.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, FilterByCustomerIdPipe,SearchByAmountPipe, SearchPipe,FormsModule,GraphComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnInit {
  customers: Customers[] = [];
  transactions: Transactions[] = [];
  selectedCustomerTransactions:Transactions[] = [];
  searchWord: string = "";
  searchAmount: number | null = null;
  constructor(private _CustomerService: CustomerService) { }
  ngOnInit(): void {
    //loadCustomerData
    this._CustomerService.loadCustomers().subscribe(data => {
      this.customers = data;
      console.log(this.customers);

    });
    //loadTransactionData
    this._CustomerService.loadTransactions().subscribe(data => {
      this.transactions = data;
      console.log(this.transactions);
    });

  }
  selectCustomer(customerId:number){
    this.selectedCustomerTransactions = this.transactions.filter(transaction => transaction.customer_id === customerId)
  }
}

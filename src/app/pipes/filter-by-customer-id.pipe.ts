import { Pipe, PipeTransform } from '@angular/core';
import { Transactions } from '../_modals/transactions';

@Pipe({
  name: 'filterByCustomerId',
  standalone: true
})
export class FilterByCustomerIdPipe implements PipeTransform {

  transform(transactions: Transactions[], customerId: number): Transactions[] {
    return transactions.filter(transaction => transaction.customer_id === customerId);
  }
}

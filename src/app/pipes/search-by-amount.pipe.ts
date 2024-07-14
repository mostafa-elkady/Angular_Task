import { Pipe, PipeTransform } from '@angular/core';
import { Transactions } from '../_modals/transactions';

@Pipe({
  name: 'searchByAmount',
  standalone: true
})
export class SearchByAmountPipe implements PipeTransform {

  transform(transactions: Transactions[], searchAmount: number): Transactions[] {

    if(!searchAmount){return transactions}
    console.log(searchAmount);
    
    return transactions.filter(transaction => transaction.amount.toString().startsWith(searchAmount.toString()) );
  }

}

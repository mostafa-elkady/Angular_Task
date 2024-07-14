import { Pipe, PipeTransform } from '@angular/core';
import { Customers } from '../_modals/customers';

@Pipe({
  name: 'searchPipe',
  standalone: true,
})
export class SearchPipe implements PipeTransform {

  transform(customers:Customers[], searchWord:string):Customers[] {
    return customers.filter((customer) => customer.name.toLowerCase().includes(searchWord.toLowerCase()));
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from './lesson04.component';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(
    allContacts: Contact[],
    args: { key: 'firstName'; order: 'asc' | 'desc' }
  ): Contact[] {
    if (!allContacts || !args) {
      return allContacts;
    }
    return allContacts.sort((a, b) => {
      const aValue = a[args.key].toLowerCase();
      const bValue = b[args.key].toLowerCase();

      if (args.order === 'asc') {
        return aValue.localeCompare(bValue);
      } else {
        return bValue.localeCompare(aValue);
      }
    });
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from './lesson04.component';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(arr: Contact[], field: string): Contact[] {
    if (!arr) return [];
    if (!field) return arr;
    return arr.filter(
      (contact) =>
        contact.firstName
          .toLocaleLowerCase()
          .includes(field.toLocaleLowerCase()) ||
        contact.lastName
          .toLocaleLowerCase()
          .includes(field.toLocaleLowerCase()) ||
        contact.number.toLocaleLowerCase().includes(field.toLocaleLowerCase())
    );
  }
}

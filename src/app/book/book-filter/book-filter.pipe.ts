import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../book';

@Pipe({
  name: 'bookFilter',
})
export class BookFilterPipe implements PipeTransform {

  transform(books: Book[] | null, searchTerm: string): Book[] {
    if (books === null) {
      return [];
    }
    return books.filter(book => book.title.toLowerCase().includes(searchTerm.toLowerCase())
      || book.author.toLowerCase().includes(searchTerm.toLowerCase()));
  }
}

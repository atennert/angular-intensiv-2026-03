import { inject, Pipe, PipeTransform } from '@angular/core';
import { Book } from '../book';
import { BookFilterService } from './book-filter.service';

@Pipe({
  name: 'bookFilter',
})
export class BookFilterPipe implements PipeTransform {
  private readonly bookFilter = inject(BookFilterService);

  transform(books: Book[] | null, searchTerm: string): Book[] {
    return this.bookFilter.filter(books, searchTerm);
  }
}

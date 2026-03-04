import { Injectable } from '@angular/core';
import { Book } from '../book';

@Injectable({
  providedIn: 'root'
})
export class BookFilterService {
  filter(books: Book[] | null, searchTerm: string): Book[] {
    if (!books) {
      return [];
    }
    return books.filter(
      book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}

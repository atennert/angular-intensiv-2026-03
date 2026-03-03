import { Component } from '@angular/core';
import { BookCardComponent } from '../book-card/book-card.component';
import { BookFilterPipe } from '../book-filter/book-filter.pipe';
import { Book } from '../book';

@Component({
  selector: 'app-book',
  imports: [BookCardComponent, BookFilterPipe],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {
  books: Book[] = [
    {
      title: 'How to win friends',
      author: 'Dale Carnegie',
      abstract: 'How to Win Friends and Influence ...'
    },
    {
      title: 'The Willpower Instinct: How Self-Control Works ...',
      author: 'Kelly McGonigal',
      abstract: 'Based on Stanford University ...'
    },
    {
      author: 'Simon Sinek',
      title: 'Start with WHY',
      abstract: "START WITH WHY shows that the leaders who've ..."
    }
  ];

  bookSearchTerm = '';

  protected goToBookDetails(book: Book) {
    console.log('Navigate to book details, soon...');
    console.table(book);
  }

  protected updateBookSearchTerm(input: Event) {
    this.bookSearchTerm = (input.target as HTMLInputElement).value;
  }
}

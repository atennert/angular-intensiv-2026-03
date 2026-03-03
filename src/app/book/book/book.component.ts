import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { BookCardComponent } from '../book-card/book-card.component';
import { BookFilterPipe } from '../book-filter/book-filter.pipe';
import { Book } from '../book';
import { BookApiService } from '../book-api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book',
  imports: [BookCardComponent, BookFilterPipe],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent implements OnInit, OnDestroy {
  private readonly bookApi = inject(BookApiService);
  private subscription: Subscription = new Subscription();
  books: Book[] = [];

  bookSearchTerm = '';

  ngOnInit() {
    this.subscription.add(this.bookApi.getAll().subscribe({
      next: books => {
      this.books = books;
    },
      error: err => console.error(err)
    }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  protected goToBookDetails(book: Book) {
    console.log('Navigate to book details, soon...');
    console.table(book);
  }

  protected updateBookSearchTerm(input: Event) {
    this.bookSearchTerm = (input.target as HTMLInputElement).value;
  }
}

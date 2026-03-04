import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { BookCardComponent } from '../book-card/book-card.component';
import { BookFilterPipe } from '../book-filter/book-filter.pipe';
import { Book } from '../book';
import { BookApiService } from '../book-api.service';
import { AsyncPipe } from '@angular/common';
import { shareReplay, Subscription } from 'rxjs';

@Component({
  selector: 'app-book',
  imports: [BookCardComponent, BookFilterPipe, AsyncPipe],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent implements OnInit, OnDestroy {
  private readonly bookApi = inject(BookApiService);

  readonly books$ = this.bookApi.getAll$().pipe(
    shareReplay(1)
  );

  bookSearchTerm = '';
  private subscription = Subscription.EMPTY;

  ngOnInit(): void {
    this.subscription = this.books$.subscribe(books => {
      console.table(books);
    });
  }

  ngOnDestroy(): void {
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

import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { BookCardComponent } from '../book-card/book-card.component';
import { BookFilterPipe } from '../book-filter/book-filter.pipe';
import { Book } from '../book';
import { BookApiService } from '../book-api.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-book',
  imports: [BookCardComponent, BookFilterPipe],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent implements OnInit {
  private readonly bookApi = inject(BookApiService);
  private readonly destroyRef = inject(DestroyRef);

  books: Book[] = [];

  bookSearchTerm = '';

  ngOnInit() {
    this.bookApi.getAll().pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe({
      next: books => {
      this.books = books;
    },
      error: err => console.error(err)
    });
  }

  protected goToBookDetails(book: Book) {
    console.log('Navigate to book details, soon...');
    console.table(book);
  }

  protected updateBookSearchTerm(input: Event) {
    this.bookSearchTerm = (input.target as HTMLInputElement).value;
  }
}

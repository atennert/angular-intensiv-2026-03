import { Component, computed, effect, inject, signal, Signal } from '@angular/core';
import { BookCardComponent } from '../book-card/book-card.component';
import { Book } from '../book';
import { BookApiService } from '../book-api.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { BookFilterService } from '../book-filter/book-filter.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-book',
  imports: [BookCardComponent, RouterLink],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {
  private readonly bookApi = inject(BookApiService);
  private readonly bookFilter = inject(BookFilterService);
  private readonly router = inject(Router);

  readonly books: Signal<Book[]> = toSignal(this.bookApi.getAll$(), { initialValue: [] });

  readonly filteredBooks: Signal<Book[]> = computed(() => {
    return this.bookFilter.filter(this.books(), this.bookSearchTerm());
  });

  constructor() {
    effect(() => {
      console.table(this.books());
    });
  }

  readonly bookSearchTerm = signal('');

  protected async goToBookDetails(book: Book) {
    await this.router.navigate(['/books', 'detail', book.isbn]);
  }

  protected updateBookSearchTerm(input: Event) {
    this.bookSearchTerm.set((input.target as HTMLInputElement).value);
  }
}

import { Component, inject, input } from '@angular/core';
import { BookApiService } from '../book-api.service';
import { switchMap } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { toObservable } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-book-detail',
  imports: [AsyncPipe],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.scss'
})
export class BookDetailComponent {
  private readonly bookApi = inject(BookApiService);

  readonly isbn = input.required<string>();

  readonly book$ = toObservable(this.isbn).pipe(
    switchMap(isbn => this.bookApi.getBookByIsbn(isbn))
  );
}

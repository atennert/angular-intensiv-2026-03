import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookApiService } from '../book-api.service';
import { map, switchMap } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-book-detail',
  imports: [AsyncPipe],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.scss'
})
export class BookDetailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly bookApi = inject(BookApiService);

  readonly book$ = this.route.params.pipe(
    map(params => params['isbn']),
    switchMap(isbn => this.bookApi.getBookByIsbn(isbn))
  );
}

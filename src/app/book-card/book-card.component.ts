import { Component, input } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book-card',
  imports: [],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss',
})
export class BookCardComponent {
  customStyle = {
    color: 'blue'
  };
  authorClass = 'author-class';

  readonly content = input.required<Book>();
}

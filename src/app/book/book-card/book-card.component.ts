import { Component, input, output } from '@angular/core';
import { Book } from '../book';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-card',
  imports: [RouterLink],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss'
})
export class BookCardComponent {
  customStyle = {
    color: 'blue'
  };
  authorClass = 'author-class';

  readonly content = input.required<Book>();

  readonly detailClick = output<Book>();

  protected handleDetailClick() {
    this.detailClick.emit(this.content());
  }
}

import { Component } from '@angular/core';
import { BookCardComponent } from './book-card/book-card.component';

@Component({
  selector: 'app-root',
  imports: [BookCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  book = {
    title: 'How to win friends',
    author: 'Dale Carnegie',
    abstract: 'In this book ...'
  };
}

import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BookComponent } from './book/book/book.component';
import { BookDetailComponent } from './book/book-detail/book-detail.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/about'
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'books',
    component: BookComponent
  },
  {
    path: 'books/detail/:isbn',
    component: BookDetailComponent
  }
];

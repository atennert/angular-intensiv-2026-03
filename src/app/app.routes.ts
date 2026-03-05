import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BookComponent } from './book/book/book.component';

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
  }
];

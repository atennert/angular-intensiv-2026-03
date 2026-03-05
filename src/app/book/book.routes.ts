import { Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { confirmLeaveGuard } from './confirm-leave.guard';

export const bookRoutes: Routes = [
  {
    path: '',
    component: BookComponent
  },
  {
    path: 'detail/:isbn',
    loadComponent: () => import('./book-detail/book-detail.component').then(m => m.BookDetailComponent),
    canDeactivate: [confirmLeaveGuard]
  }
];

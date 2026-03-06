import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookForm } from './book-form';
import { BookApiService } from '../book-api.service';
import { Book } from '../book';
import { Router } from '@angular/router';
import { authorValidator, ISBN, isbnValidator } from './author.validator';

@Component({
  selector: 'app-book-new',
  imports: [ReactiveFormsModule],
  templateUrl: './book-new.component.html',
  styleUrl: './book-new.component.scss'
})
export class BookNewComponent {
  private readonly fb = inject(FormBuilder);
  private readonly bookApi = inject(BookApiService);
  private readonly router = inject(Router);

  readonly form: FormGroup<BookForm> = this.fb.group({
    isbn: ['', [Validators.required, isbnValidator(ISBN.ISBN_10)]],
    author: ['', [Validators.required, authorValidator]],
    title: ['', [Validators.required]],
    subtitle: [''],
    abstract: ['']
  });

  submit() {
    this.bookApi.create(this.form.value as Book).subscribe({
      next: book => {
        console.log('Book created:', book);
        this.router.navigate(['/books', 'detail', book.isbn]);
      },
      error: error => console.error('Error creating book:', error)
    });
  }
}

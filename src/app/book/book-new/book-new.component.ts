import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
    authors: this.fb.array([
      this.fb.control<string | null>('', [Validators.required, authorValidator])
    ]),
    title: ['', [Validators.required]],
    subtitle: [''],
    abstract: ['']
  });

  get authors() {
    return this.form.get('authors') as FormArray;
  }

  addAuthor() {
    this.authors.controls.push(this.fb.control('', [Validators.required, authorValidator]));
  }

  deleteAuthor(index: number) {
    this.authors.removeAt(index);
  }

  submit() {
    const newBook = {
      ...this.form.value,
      author: this.authors.value.join(', ')
    } as Book & { authors: unknown };
    console.log('New book:', newBook);
    delete newBook['authors'];
    this.bookApi.create(newBook).subscribe({
      next: book => {
        console.log('Book created:', book);
        this.router.navigate(['/books', 'detail', book.isbn]);
      },
      error: error => console.error('Error creating book:', error)
    });
  }
}

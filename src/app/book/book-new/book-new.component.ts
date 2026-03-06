import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookForm } from './book-form';

@Component({
  selector: 'app-book-new',
  imports: [ReactiveFormsModule],
  templateUrl: './book-new.component.html',
  styleUrl: './book-new.component.scss'
})
export class BookNewComponent {
  private readonly fb = inject(FormBuilder);

  readonly form: FormGroup<BookForm> = this.fb.group({
    isbn: ['', [Validators.required]],
    author: ['', [Validators.required]],
    title: ['', [Validators.required]],
    subtitle: [''],
    abstract: ['']
  });

  submit() {
    console.log('Form submitted:', this.form.value);
  }
}

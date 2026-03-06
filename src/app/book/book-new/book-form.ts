import { FormControl } from '@angular/forms';
import { Book } from '../book';

type FormOf<Base> = {
  [Key in keyof Base]: FormControl<Base[Key] | null>;
};

// export interface BookForm {
//   isbn: FormControl<string|null>;
//   title: FormControl<string|null>;
//   author: FormControl<string|null>;
//   abstract: FormControl<string|null>;
//   subtitle: FormControl<string|null>;
// }

export type BookForm = FormOf<Book>;

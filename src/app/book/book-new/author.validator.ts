import { ValidatorFn } from '@angular/forms';

export const authorValidator: ValidatorFn = (control) => {
  const value = control.value;
  if (!value) {
    return null;
  }

  const hasNumeric = /[0-9]+/.test(value);
  return hasNumeric ? { invalidAuthor: true } : null;
}

export enum ISBN {
  ISBN_10 = 'ISBN_10',
  ISBN_13 = 'ISBN_13'
}
const rgx_10 =
  /^(?:ISBN(?:-10)?:? )?(?=[0-9X]{10}$|(?=(?:[0-9]+[- ]){3})[- 0-9X]{13}$)[0-9]{1,5}[- ]?[0-9]+[- ]?[0-9]+[- ]?[0-9X]$/;
const rgx_13 =
  /^(?:ISBN(?:-13)?:? )?(?=[0-9]{13}$|(?=(?:[0-9]+[- ]){4})[- 0-9]{17}$)97[89][- ]?[0-9]{1,5}[- ]?[0-9]+[- ]?[0-9]+[- ]?[0-9]$/;

export function isbnValidator(type: ISBN): ValidatorFn {
  return (control) => {
    const value = control.value;
    if (!value) {
      return null;
    }
    if (type === ISBN.ISBN_10) {
      return rgx_10.test(value) ? null : { invalidISBN: true };
    } else if (type === ISBN.ISBN_13) {
      return rgx_13.test(value) ? null : { invalidISBN: true };
    } else {
      return { unknownIsbnType: true};
    }
  }
}

import { FormControl } from '@angular/forms';

export function nameValidator(control: FormControl): { [s: string]: boolean } {
  if (control.value && control.value.toLowerCase().includes('test')) {
    return { 'invalidName': true };
  }
  return null;
}


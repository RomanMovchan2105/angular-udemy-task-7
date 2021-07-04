import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';


export function asyncNameValidator(control: FormControl): Promise<any> | Observable<any> {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (control.value && control.value.toLowerCase() === 'test1') {
        resolve({ 'invalidNameAsync': true });
      } else {
        resolve(null);
      }
    }, 2000);
  });
  return promise;
}


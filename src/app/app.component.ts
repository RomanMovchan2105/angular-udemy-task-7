import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { nameValidator } from './name.validator';
import { asyncNameValidator } from './async-name.validator';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isSubmit = false;

  formGroup: FormGroup = this.fb.group({
    name: this.fb.control('', {
      validators: [Validators.required, nameValidator],
      asyncValidators: [asyncNameValidator]
    }),
    email: this.fb.control('', {
      validators: [Validators.required, Validators.email],
    }),
    status: this.fb.control('', {
      validators: [Validators.required],
    }),
  });


  constructor(
    private fb: FormBuilder,
  ) { }

  onSubmit() {
    console.log(this.formGroup.value);
    this.isSubmit = true;
  }
}

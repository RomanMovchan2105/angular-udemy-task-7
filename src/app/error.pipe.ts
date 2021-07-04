import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'error'
})


export class ErrorPipe implements PipeTransform {

    errors = {
        'form-required': 'Fill the form',
        'form-server': 'Server error',
        'form-name-required': 'Enter name',
        'form-name-invalidName': 'Name shouldn\'t be \'Test\'',
        'form-name-invalidNameAsync': 'Name shouldn\'t be \'Test\'',

        'form-email-required': 'Enter email',
        'form-email-email': 'Enter valid email',

        'form-status-required': 'Choose status',

    };

    transform(value: string): any {
        return this.errors[value] || value;
    }
}

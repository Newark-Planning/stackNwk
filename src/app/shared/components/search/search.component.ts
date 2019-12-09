import { Component, HostBinding, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClrForm } from '@clr/angular';

@Component({
    selector: 'app-search',
    styleUrls: ['./search.component.scss'],
    templateUrl: './search.component.html'
})
export class SearchComponent {
    @HostBinding('app-search') class: true;
    @ViewChild(ClrForm, { static: true }) clrForm: ClrForm;

    exampleForm = new FormGroup({
        sample: new FormControl('', Validators.required)
    });

    submit(): void {
        if (this.exampleForm.invalid) {
            this.clrForm.markAsTouched();
        } else {
            // Do submit logic
        }
    }
}

import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClrForm } from '@clr/angular';

@Component({
  selector: 'app-splash',
  styleUrls: ['./splash.component.scss'],
  templateUrl: './splash.component.html'
})

export class SplashComponent {
  @Input() parentFragment: string;
  @Input() backgroundSetting: TemplateRef<any>;
  @Input() logoSrc: TemplateRef<any>;
  @Input() searchDisplay = 'none';
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

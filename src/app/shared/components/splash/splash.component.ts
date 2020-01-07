import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ClrForm } from '@clr/angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-splash',
  styleUrls: ['./splash.component.scss'],
  templateUrl: './splash.component.html'
})

export class SplashComponent {
  @Input() parentFragment: string;
  @Input() backgroundSetting: TemplateRef<any>;
  @Input() logoSrc: Observable<string>;
  @Input() searchDisplay = 'none';
  @ViewChild(ClrForm, { static: true }) clrForm: ClrForm;
  exampleForm = new FormGroup({
    sample: new FormControl('', Validators.required)
  });

  constructor(route: ActivatedRoute) {
    this.logoSrc = route.data.pipe(map(d =>  d.logoSrc));
  }

  submit(): void {
    if (this.exampleForm.invalid) {
      this.clrForm.markAsTouched();
    } else {
      // Do submit logic
    }
  }
}

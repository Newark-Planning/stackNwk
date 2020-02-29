import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClrForm } from '@clr/angular';

@Component({
  selector: 'app-splash',
  styleUrls: ['./splash.component.scss'],
  templateUrl: './splash.component.html'
})

export class SplashComponent implements OnInit {
  @Input() parentFragment = '/ehd';
  @Input() backgroundSetting: TemplateRef<any>;
  @Input() logoSrc = 'assets/img/NwkEhdLogos/SVG/NwkEhd_Divs_web_ehd.svg';
  @Input() searchDisplay = 'none';
  @ViewChild(ClrForm, { static: true }) clrForm: ClrForm;
  exampleForm = new FormGroup({
    sample: new FormControl('', Validators.required)
  });

  constructor(
    readonly route: ActivatedRoute,
    readonly router: Router
    ) {  }
  ngOnInit(): void {
    this.parentFragment = this.router.url.substr(0, 4);
    this.logoSrc = `assets/img/NwkEhdLogos/SVG/NwkEhd_Divs_web_${this.router.url.substr(1, 3)}.svg`;
  }

  submit(): void {
    if (this.exampleForm.invalid) {
      this.clrForm.markAsTouched();
    } else {
      // Do submit logic
    }
  }
}

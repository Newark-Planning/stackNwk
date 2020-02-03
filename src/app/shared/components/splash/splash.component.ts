import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ClrForm } from '@clr/angular';

@Component({
  selector: 'app-splash',
  styleUrls: ['./splash.component.scss'],
  templateUrl: './splash.component.html'
})

export class SplashComponent implements OnInit {
  @Input() parentFragment: string;
  @Input() backgroundSetting: TemplateRef<any>;
  @Input() logoSrc: string;
  @Input() searchDisplay = 'none';
  @ViewChild(ClrForm, { static: true }) clrForm: ClrForm;
  exampleForm = new FormGroup({
    sample: new FormControl('', Validators.required)
  });

  constructor(readonly route: ActivatedRoute) {  }
  ngOnInit(): void {
    switch (this.parentFragment) {
        case '/rc': {
          this.logoSrc = '../../../../assets/img/NwkEhdLogos/PNG/NwkEhd_divs_web_Rent Control.png';
          break;
        }
        case '/opz': {
          this.logoSrc = '../../../../assets/img/NwkEhdLogos/PNG/NwkEhd_divs_web_Planning & Zoning.png';
          break;
        }
        default: {
          this.logoSrc = '../../../../assets/img/NwkEhdLogos/PNG/NwkEhd_EHD_Web.png';
          break;
        }
    }
  }
  submit(): void {
    if (this.exampleForm.invalid) {
      this.clrForm.markAsTouched();
    } else {
      // Do submit logic
    }
  }
}

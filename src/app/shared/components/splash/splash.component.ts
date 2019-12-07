import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-splash',
  styleUrls: ['./splash.component.scss'],
  templateUrl: './splash.component.html'
})

export class SplashComponent {
  @Input() parentFragment: string;
  @Input() backgroundSetting: TemplateRef<any>;
  @Input() logoSrc: TemplateRef<any>;
}

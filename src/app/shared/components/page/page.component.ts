import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Page } from '../../models/pages.model';
import { AirService } from '../../services/air.service';

@Component({
  selector: 'app-page',
  styleUrls: ['./page.component.scss'],
  templateUrl: './page.component.html'
})

export class PageComponent implements OnInit {
  @Input() page: Page;

  constructor(
    public airData: AirService,
    readonly router: Router) { }

  ngOnInit(): void {
    const records = 'records';
    if (!this.page.splashTitle$) {
      this.airData.getRecords('PageComps', `filterByFormula=%7BName%7D%3D'${this.router.url.substr(1, 3)}+Page+Splash+Title'`)
        .subscribe(
          // tslint:disable-next-line: no-string-literal
          data => this.page.splashTitle$ = data[records]['Content'],
          err => { console.error(err); } );
    }
  }
}

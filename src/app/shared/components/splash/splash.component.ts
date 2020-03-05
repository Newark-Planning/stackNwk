import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JsonDataService } from '../../services';

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
  results: Array<any>;
  page;

  constructor(
    readonly searchData: JsonDataService,
    readonly route: ActivatedRoute,
    readonly router: Router
    ) {  }
  ngOnInit(): void {
    this.parentFragment = this.router.url.substr(0, 4);
    this.logoSrc = `assets/img/NwkEhdLogos/SVG/NwkEhd_Divs_web_${this.router.url.substr(1, 3)}.svg`;
  }
  filterCountry(query, pages: Array<any>): Array<any> {
    // tslint:disable-next-line: prefer-const
    let filtered: Array<any> = [];
    // tslint:disable-next-line: prefer-const
    for (let page of pages) {
      if (page.title.toLowerCase()
        .indexOf(query.toLowerCase()) === 0) {
        filtered.push(page);
      }
    }

    return filtered;
  }
  search(event): any {
    // tslint:disable-next-line: prefer-const
    let query = event.query;
    this.searchData.getSiteMap()
      .then(res => {
        this.results = this.filterCountry(query, res);
    });
  }
  goTo(value): any {
    (value.parent)
    ? window.open(`/${value.office}/${value.parent}/${value.path}`, '_self')
    : window.open(`/${value.office}/${value.path}`, '_self');
  }
}

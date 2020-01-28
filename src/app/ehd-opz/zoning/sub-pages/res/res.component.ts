import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Record } from '../../../../shared/models';

import { AirService } from '../../../../shared/services/air.service';

@Component({
  selector: 'opz-zoning-res',
  styleUrls: ['./res.component.scss'],
  templateUrl: './res.component.html'
})
export class OpzZoningResComponent implements OnInit {
  splashTitle$: Record;

  constructor(
    public airData: AirService,
    readonly route: ActivatedRoute,
    readonly router: Router) { }

  ngOnInit(): void {
    const records = 'records';
    // tslint:disable-next-line: no-floating-promises
    this.airData.getRecords('PageComps', "filterByFormula=%7BName%7D%3D'Zoning+Splash+Title'")
      .subscribe(
        data => {
          this.splashTitle$ = data[records];
        });
  }
}

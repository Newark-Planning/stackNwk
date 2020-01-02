import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Record } from '../../shared/models';
import { AirService } from '../../shared/services/air.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-opz-masterplan',
  styleUrls: ['./about.component.scss'],
  templateUrl: './about.component.html'
})

export class OpzMasterplanComponent implements OnInit {
  splashTitle$: Record;
  article$: Array<Record>;
  inOverflow = true;
  backgroundStyle = {
    'background-image': "url('assets/img/ironboundbig.jpg')"
  };
  button$ = [
    { icon: 'calendar', index: 1, text: 'Board Meetings', textSmall: 'Board Meetings' },
    { icon: 'file', index: 2, text: 'Plans & Documents', textSmall: 'Plans & Docs' },
    { icon: 'map', index: 3, text: 'Zoning Map', textSmall: 'Zoning Map' },
    { icon: 'pop-out', index: 4, text: 'Application Portal', textSmall: 'Applications' }
  ];

  constructor(
    public airData: AirService,
    readonly route: ActivatedRoute,
    readonly router: Router) { }

  ngOnInit(): void {
    const records = 'records';
    // tslint:disable-next-line: no-floating-promises
    this.airData.getRecords('PageComps', "filterByFormula=%7BName%7D%3D'Staff+Splash+Title'")
      .subscribe(
        data => {
          this.splashTitle$ = data[records];
        });
    const param = 'maxRecords=3&sort%5B0%5D%5Bfield%5D=Date&sort%5B0%5D%5Bdirection%5D=asc';
    // tslint:disable-next-line: no-floating-promises
    this.airData.getRecords('Articles', param)
      .subscribe(
        data => {
          this.article$ = data[records];
        });
  }
}

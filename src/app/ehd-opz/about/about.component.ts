import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Record } from '../../shared/models';
import { AirService } from '../../shared/services/air.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-opz-about',
  styleUrls: ['./about.component.scss'],
  templateUrl: './about.component.html'
})

export class OpzAboutComponent implements OnInit {
  subComponents: any = [
    { label: 'Our Leadership', path: 'leadership' },
    { label: 'Planning Staff', path: 'planners' },
    { label: 'Zoning Staff', path: 'zoners' },
    { label: 'Support Staff', path: 'support' }
  ];
  splashTitle$: Record;
  zoningStaff$: Array<Record>;
  backgroundStyle = {
    'background-image': "url('../../../../assets/img/ironboundbig.jpg')"
  };

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
  }
}

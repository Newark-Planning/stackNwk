import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { routeAnimations } from '../../core/core.module';
import { Record } from '../../shared/models';

import { AirService } from '../../shared/services/air.service';

@Component({
  animations: [routeAnimations],
  selector: 'app-planning-zoning',
  styleUrls: ['./zoning.component.scss'],
  templateUrl: './zoning.component.html'
})
export class OpzZoningComponent implements OnInit {
  subComponents = [
    { label: 'Our Leadership', path: 'leadership' },
    { label: 'Planning Staff', path: 'planners' },
    { label: 'Zoning Staff', path: 'zoners' },
    { label: 'Support Staff', path: 'support' }
  ];
  splashTitle$: Record;
  backgroundStyle = {
    'background-image': "url('assets/img/NwkCitySky.png')"
  };
  button$ = [
    { icon: 'pinboard', index: 1, text: 'Zoning Map', textSmall: 'Zoning' },
    { icon: 'building', index: 2, text: 'Pipeline Map', textSmall: 'Pipeline' },
    { icon: 'bicycle', index: 3, text: 'Transit Map', textSmall: 'Transit' }
  ];

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

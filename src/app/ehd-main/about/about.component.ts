import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Record } from '../../shared/models';
import { AirService } from '../../shared/services/air.service';

@Component({
  selector: 'app-ehd-about',
  styleUrls: ['./about.component.scss'],
  templateUrl: './about.component.html'
})

export class EhdAboutComponent implements OnInit {
  splashTitle$: Record;
  zoningStaff$: Array<Record>;
  inOverflow = true;
  backgroundStyle = {
    'background-image': "url('assets/img/NwkCitySky.png')"
  };
  subComponents = [
    { label: 'Our Leadership', path: 'leadership' },
    { label: 'Support Staff', path: 'support' }
  ];
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
  }
}

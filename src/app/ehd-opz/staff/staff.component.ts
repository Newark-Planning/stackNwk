import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Record, SubComponent } from '../../shared/models';
import { AirService } from '../../shared/services/air.service';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-opz-staff',
  styleUrls: ['./staff.component.scss'],
  templateUrl: './staff.component.html'
})

export class OpzStaffComponent implements OnInit {
  splashTitle$: Record;
  staff$: Array<Record>;
  activeLinkIndex = -1;
  backgroundStyle = {
    'background-image': "url('assets/img/ironboundbig.jpg')"
  };
  subComponents: Array<SubComponent | any>;
  button$ = [
    { icon: 'calendar', index: 1, text: 'Board Meetings', textSmall: 'Board Meetings' },
    { icon: 'file', index: 2, text: 'Plans & Documents', textSmall: 'Plans & Docs' },
    { icon: 'map', index: 3, text: 'Zoning Map', textSmall: 'Zoning Map' },
    { icon: 'pop-out', index: 4, text: 'Application Portal', textSmall: 'Applications' }
  ];

  constructor(
    public airData: AirService,
    readonly route: ActivatedRoute,
    readonly router: Router) {
      this.subComponents = [
        { label: 'Our Leadership', path: 'leadership', viewName: 'Leadership', index: 0 },
        { label: 'Planning Staff', path: 'planners', viewName: 'Planners', index: 1 },
        { label: 'Zoning & Support Staff', path: 'support', viewName: 'ZoningSupportStaff', index: 2 }
      ];
    }

  ngOnInit(): void {
    this.router.events.subscribe(res => {
      this.activeLinkIndex = this.subComponents.indexOf(
        this.subComponents.find(
          tab => tab.path === `${this.router.url.slice(this.router.url.lastIndexOf('/') + 1)}`
          )
        );
    });
    const records = 'records';
    // tslint:disable-next-line: no-floating-promises
    this.airData.getRecords('PageComps', "filterByFormula=%7BName%7D%3D'Staff+Splash+Title'")
      .subscribe(
        data => {
          this.splashTitle$ = data[records];
        });
    // tslint:disable-next-line: no-floating-promises
    this.airData.getRecords('Staff', `view=${this.subComponents[this.activeLinkIndex].viewName}`)
      .subscribe(
        data => {
          this.staff$ = data[records];
        });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Record, SubComponent } from '../../shared/models';
import { AirService, CalendarService } from '../../shared/services';

import { OverlayPanel } from 'primeng/overlaypanel/public_api';

import listMonth from '@fullcalendar/list';

@Component({
  selector: 'app-opz-boards',
  styleUrls: ['./boards.component.scss'],
  templateUrl: './boards.component.html'
})

export class OpzBoardsComponent implements OnInit {
  splashTitle$: Record;
  board$: Array<Record>;
  article$: Array<Record>;
  backgroundStyle = {
    'background-image': "url('assets/img/ironboundbig.jpg')"
  };
  button$ = [
    { icon: 'calendar', index: 1, text: 'Scheduled Meetings', textSmall: 'Meetings' },
    { icon: 'file', index: 2, text: 'Minutes', textSmall: 'Minutes' },
    { icon: 'file', index: 3, text: 'Agendas', textSmall: 'Agendas' }
  ];
  subComponents: Array<SubComponent | any>;
  activeFragment;
  events: Array<any>;
  calOptions: any;

  constructor(
    public airData: AirService,
    public getevents: CalendarService,
    readonly route: ActivatedRoute,
    readonly router: Router) {
      this.subComponents = [
        { label: 'Zoning Board of Adjustment', path: 'zba', index: 0 },
        { label: 'Central Planning Board', path: 'cpb', index: 1 },
        { label: 'Landmark & Historic Preservation Commission', path: 'lhpc', index: 2 },
        { label: 'Environmental Commission', path: 'ec', index: 3 }
      ];
    }

  ngOnInit(): void {
    this.activeFragment = this.router.url.slice(this.router.url.lastIndexOf('/') + 1)
      .toUpperCase();
    this.getTab(this.activeFragment);
    this.getevents.getBoardCommissionEvents()
      .then(events => { this.events = events; });
    this.calOptions = {
      defaultView: 'listMonth',
      editable: false,
      plugins: [listMonth]
    };
  }

  getTab(view): any {
    const records = 'records';
    this.airData.getRecords('Boards', `view=${view.toUpperCase()}`)
      .subscribe(
        data => {
          this.board$ = data[records];
        });
  }

  overlay(event, overlay: OverlayPanel): any {
    overlay.toggle(event);
  }
}

import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Record } from '../../shared/models';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-opz-boards',
  styleUrls: ['./boards.component.scss'],
  templateUrl: './boards.component.html'
})

export class OpzBoardsComponent {
  splashTitle$: Record;
  article$: Array<Record>;
  inOverflow = true;
  backgroundStyle = {
    'background-image': "url('assets/img/ironboundbig.jpg')"
  };
  subComponents = [
    { label: 'Zoning Board of Adjustment', path: 'zba' },
    { label: 'Central Planning Board', path: 'cpb' },
    { label: 'Landmark & Historic Preservation Commission', path: 'lhpc' },
    { label: 'Environmental Commission', path: 'ec' }
  ];
  button$ = [
    { icon: 'calendar', index: 1, text: 'Scheduled Meetings', textSmall: 'Meetings' },
    { icon: 'file', index: 2, text: 'Minutes', textSmall: 'Minutes' },
    { icon: 'file', index: 3, text: 'Agendas', textSmall: 'Agendas' }
  ];

  constructor(
    readonly route: ActivatedRoute,
    readonly router: Router) { }
}

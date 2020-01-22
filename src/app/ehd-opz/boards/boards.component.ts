import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Record, SubComponent } from '../../shared/models';

@Component({
  selector: 'app-opz-boards',
  styleUrls: ['./boards.component.scss'],
  templateUrl: './boards.component.html'
})

export class OpzBoardsComponent implements OnInit {
  inOverflow = true;
  layout = 'horizontal';
  splashTitle$: Record;
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
  activeLinkIndex = -1;
  constructor(
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
    this.router.events.subscribe(res => {
      this.activeLinkIndex = this.subComponents.indexOf(this.subComponents.find(tab => tab.link === `.${this.router.url}`));
    });

  }
}

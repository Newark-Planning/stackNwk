import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Record, SubComponent } from '../../shared/models';
import { AirService } from '../../shared/services/air.service';

@Component({
  selector: 'app-opz-boards',
  styleUrls: ['./boards.component.scss'],
  templateUrl: './boards.component.html'
})

export class OpzBoardsComponent implements OnInit {
  inOverflow = true;
  layout = 'horizontal';
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

  constructor(
    public airData: AirService,
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
  }

  getTab(view): any {
    const records = 'records';
    this.airData.getRecords('Boards', `view=${view.toUpperCase()}`)
      .subscribe(
        data => {
          this.board$ = data[records];
        });
  }
}

import { Component, OnInit } from '@angular/core';
import { Record } from '../../../shared/models';
import { AirService } from '../../../shared/services/air.service';

@Component({
  selector: 'app-leaders',
  styleUrls: ['../staff.component.scss'],
  templateUrl: './leaders.component.html'
})
export class LeadersComponent implements OnInit {
  leadership$: Array<Record>;
  constructor(
    public airData: AirService
  ) { }

  ngOnInit(): void {
    const records = 'records';
    // tslint:disable-next-line: no-floating-promises
    this.airData.getRecords('Staff', 'view=Leadership')
      .subscribe(
        data => {
          this.leadership$ = data[records];
        });
  }

}

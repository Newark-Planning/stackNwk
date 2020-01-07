import { Component, OnInit } from '@angular/core';
import { Record } from '../../../shared/models';
import { AirService } from '../../../shared/services/air.service';

@Component({
  selector: 'app-support',
  styleUrls: ['../about.component.scss'],
  templateUrl: './support.component.html'
})
export class SupportComponent implements OnInit {
  supportStaff$: Array<Record>;
  constructor(
    public airData: AirService
  ) { }

  ngOnInit(): void {
    const records = 'records';
    // tslint:disable-next-line: no-floating-promises
    this.airData.getRecords('Staff', 'view=ZoningSupportStaff')
      .subscribe(
        data => {
          this.supportStaff$ = data[records];
        });
  }
}

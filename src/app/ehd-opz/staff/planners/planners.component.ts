import { Component, OnInit } from '@angular/core';
import { Record } from '../../../shared/models';
import { AirService } from '../../../shared/services/air.service';

@Component({
  selector: 'app-planners',
  styleUrls: ['../staff.component.scss'],
  templateUrl: './planners.component.html'
})
export class PlannersComponent implements OnInit {
  planningStaff$: Array<Record>;

  constructor(readonly airData: AirService) { }

  ngOnInit(): void {
    const records = 'records';
    // tslint:disable-next-line: no-floating-promises
    this.airData.getRecords('Staff', 'view=Planners')
      .subscribe(
        data => {
          this.planningStaff$ = data[records];
        });
  }

}

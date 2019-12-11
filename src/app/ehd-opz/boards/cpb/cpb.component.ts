import { Component, OnInit } from '@angular/core';
import { Record } from '../../../shared/models';
import { AirService } from '../../../shared/services/air.service';

@Component({
  selector: 'app-cpb',
  styleUrls: ['../boards.component.scss'],
  templateUrl: './cpb.component.html'
})
export class CPBComponent implements OnInit {
  planners$: Array<Record>;

  constructor(readonly airData: AirService) { }

  ngOnInit(): void {
    const records = 'records';
    // tslint:disable-next-line: no-floating-promises
    this.airData.getRecords('Boards', 'view=CPB')
      .subscribe(
        data => {
          this.planners$ = data[records];
        });
  }

}

import { Component, OnInit } from '@angular/core';
import { Record } from '../../../shared/models';
import { AirService } from '../../../shared/services/air.service';

@Component({
  selector: 'app-lhpc',
  styleUrls: ['../boards.component.scss'],
  templateUrl: './lhpc.component.html'
})
export class LHPCComponent implements OnInit {
  historians$: Array<Record>;
  constructor(
    public airData: AirService
  ) { }

  ngOnInit(): void {
    const records = 'records';
    // tslint:disable-next-line: no-floating-promises
    this.airData.getRecords('Boards', 'view=LHPC')
      .subscribe(
        data => {
          this.historians$ = data[records];
        });
  }
}

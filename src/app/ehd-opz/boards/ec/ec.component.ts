import { Component, OnInit } from '@angular/core';
import { Record } from '../../../shared/models';
import { AirService } from '../../../shared/services/air.service';

@Component({
  selector: 'app-ec',
  styleUrls: ['../boards.component.scss'],
  templateUrl: './ec.component.html'
})
export class ECComponent implements OnInit {
  enviros$: Array<Record>;

  constructor(readonly airData: AirService) { }

  ngOnInit(): void {
    const records = 'records';
    // tslint:disable-next-line: no-floating-promises
    this.airData.getRecords('Boards', 'view=EC')
      .subscribe(
        data => {
          this.enviros$ = data[records];
        });
  }

}

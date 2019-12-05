import { Component, OnInit } from '@angular/core';
import { Record } from '../../../shared/models';
import { AirService } from '../../../shared/services/air.service';

@Component({
  selector: 'app-support',
  styleUrls: ['../about.component.scss'],
  templateUrl: './support.component.html'
})
export class SupportComponent implements OnInit {
  zoningStaff$: Array<Record>;
  constructor(
    public airData: AirService
  ) { }

  ngOnInit(): void {
    const records = 'records';
    // tslint:disable-next-line: no-floating-promises
    this.airData.getRecords('Staff', "filterByFormula=%7BHierarchy%7D%3E'4'")
      .subscribe(
        data => {
          this.zoningStaff$ = data[records];
        });
  }
}

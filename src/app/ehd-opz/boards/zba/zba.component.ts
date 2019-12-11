import { Component, OnInit } from '@angular/core';
import { Record } from '../../../shared/models';
import { AirService } from '../../../shared/services/air.service';

@Component({
  selector: 'app-zba',
  styleUrls: ['../boards.component.scss'],
  templateUrl: './zba.component.html'
})
export class ZBAComponent implements OnInit {
  zoners$: Array<Record>;
  constructor(
    public airData: AirService
  ) { }

  ngOnInit(): void {
    const records = 'records';
    this.airData.getRecords('Boards', 'view=ZBA')
      .subscribe(
        data => {
          this.zoners$ = data[records];
        });
  }

}

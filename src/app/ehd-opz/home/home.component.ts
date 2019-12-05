import { Component, OnInit } from '@angular/core';

import { Record } from '../../shared/models';
import { AirService } from '../../shared/services/air.service';

@Component({
  selector: 'app-opz-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})

export class OpzHomeComponent implements OnInit {
  splashTitle$: Array<Record>;
  article$: Array<Record>;
  backgroundStyle = {
    'background-image': "url(src/assets/img/NewarkCitySKy.jpg)"
  };
  constructor(
    public airData: AirService) { }

  ngOnInit(): void {
    const records = 'records';
    // tslint:disable-next-line: no-floating-promises
    this.airData.getRecords('PageComps', "filterByFormula=%7BName%7D%3D'Homepage+Splash+Title'")
      .subscribe(
        data => {
          this.splashTitle$ = data[records];
        });
    const param = 'maxRecords=3&sort%5B0%5D%5Bfield%5D=Date&sort%5B0%5D%5Bdirection%5D=asc';
    // tslint:disable-next-line: no-floating-promises
    this.airData.getRecords('Articles', param)
      .subscribe(
        data => {
          this.article$ = data[records];
        });
  }
}

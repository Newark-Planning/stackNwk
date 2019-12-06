import { Component, OnInit } from '@angular/core';

import { routeAnimations } from '../../core/core.module';
import { Record } from '../../shared/models';

import { AirService } from '../../shared/services/air.service';

@Component({
  animations: [routeAnimations],
  selector: 'app-planning-zoning',
  styleUrls: ['./zoning.component.scss'],
  templateUrl: './zoning.component.html'
})
export class OpzZoningComponent implements OnInit {
  splashTitle$: Record;
  article$: Array<Record>;
  backgroundStyle = {
    'background-image': "url('../../../assets/img/NewarkCitySKy.jpg')"
  };

  constructor(public airData: AirService) { }

  ngOnInit(): void {
    const records = 'records';
    // tslint:disable-next-line: no-floating-promises
    this.airData.getRecords('PageComps', "filterByFormula=%7BName%7D%3D'Zoning+Splash+Title'")
      .subscribe(
        data => {
          this.splashTitle$ = data[records];
        });
  }
}

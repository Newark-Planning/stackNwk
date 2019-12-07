import { Component, OnInit } from '@angular/core';
import { Record } from '../../shared/models';
import { AirService } from '../../shared/services/air.service';

@Component({
  selector: 'app-ehd-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})

export class EhdHomeComponent implements OnInit {
  splashTitle$: Array<Record>;
  article$: Array<Record>;
  name: Array<any>;
  backgroundStyle = {
    'background-image': "url('../../../assets/img/NwkDawn.jpg')"
  };

  constructor(
    public airData: AirService
  ) { }

  ngOnInit(): void {
    const records = 'records';
    this.airData.getRecords('PageComps', "filterByFormula=%7BName%7D%3D'Homepage+Splash+Title'")
      .subscribe(
        data => {
          this.splashTitle$ = data[records];
        });
  }
}

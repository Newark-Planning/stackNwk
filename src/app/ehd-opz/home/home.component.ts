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
    'background-blend-mode': 'multiply',
    'background-color': 'rgba(150,100,100, .5)',
    'background-image': `
    url('assets/img/HalseyStreet_image7.png'),
    url('assets/textures/mocha-grunge.png')`,
    'background-repeat': 'no-repeat, repeat',
    'background-size': 'cover, auto auto'
  };
  button$ = [
    { icon: 'calendar', index: 1, text: 'Board Meetings', textSmall: 'Board Meetings' },
    { icon: 'file', index: 2, text: 'Plans & Documents', textSmall: 'Plans & Docs' },
    { icon: 'map', index: 3, text: 'Zoning Map', textSmall: 'Zoning Map' },
    { icon: 'pop-out', index: 4, text: 'Application Portal', textSmall: 'Applications' }
 ];
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

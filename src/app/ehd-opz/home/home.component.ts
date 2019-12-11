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
    { icon: 'calendar', index: 1, text: 'Board Meetings', textSmall: 'Board Meetings', link: '' },
    { icon: 'file', index: 2, text: 'Plans & Documents', textSmall: 'Plans & Docs', link: '/opz/resources' },
    { icon: 'map', index: 3, text: 'Zoning Map', textSmall: 'Zoning Map', link: '/opz/ourcity/map-zoning' },
    { icon: 'pop-out', index: 4, text: 'Application Portal', textSmall: 'Applications', link: 'https://newarkportal.us/' }
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
      }
}

import { Component } from '@angular/core';
import { HomePage } from '../../shared/models';

@Component({
  selector: 'opz-home',
  template: `
    <app-home [homePage]="homePageDetails"></app-home>
  `
})

export class OpzHomeComponent {
  homePageDetails: HomePage = {
    backgroundStyling: {
      'background-blend-mode': 'multiply',
      'background-color': 'rgba(150,100,100, .5)',
      'background-image': "url('assets/img/HalseyStreet_image7.png'), url('assets/textures/mocha-grunge.png')",
      'background-repeat': 'no-repeat, repeat',
      'background-size': 'cover, auto auto'
    },
    button$: [
      { icon: 'calendar', index: 1, text: 'Board Meetings', textSmall: 'Board Meetings', link: '/opz/boards' },
      { icon: 'file', index: 2, text: 'Plans & Documents', textSmall: 'Plans & Docs', link: '/opz/resources' },
      { icon: 'map', index: 3, text: 'Zoning Map', textSmall: 'Zoning Map', link: '/opz/ourcity' },
      { icon: 'pop-out', index: 4, text: 'Application Portal', textSmall: 'Applications', link: 'https://newarkportal.us/' }
    ],
    division: 'Planning & Zoning',
    searchDisplay: 'inherit'
  };
}

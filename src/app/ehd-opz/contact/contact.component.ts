import { Component } from '@angular/core';

@Component({
  selector: 'app-opz-home',
  styleUrls: ['./contact.component.scss'],
  templateUrl: './contact.component.html'
})

export class OpzContactComponent {
  backgroundStyle = {
    'background-blend-mode': 'multiply',
    'background-color': 'transparent',
    'background-image': "url('assets/textures/mocha-grunge.png')",
    'background-repeat': 'repeat',
    'background-size': 'auto auto'
  };
}

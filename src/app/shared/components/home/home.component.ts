import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomePage } from '../../models/pages.model';
import { AirService } from '../../services/air.service';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
  @Input() homePage: HomePage;

  constructor(
    public airData: AirService,
    readonly router: Router) { }

  ngOnInit(): void {
    const records = 'records';
    if (!this.homePage.splashTitle$) {
      this.airData.getRecords('PageComps', `filterByFormula=%7BName%7D%3D'${this.router.url.substr(1, 3)}+Homepage+Splash+Title'`)
        .subscribe(
          data => this.homePage.splashTitle$ = data[records],
          err => { console.error(err); } );
    }
  }
}

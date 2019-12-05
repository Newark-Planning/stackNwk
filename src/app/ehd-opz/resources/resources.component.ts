import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Record } from '../../shared/models';
import { AirService } from '../../shared/services/air.service';

@Component({
  selector: 'app-planning-resources',
  styleUrls: ['./resources.component.scss'],
  templateUrl: './resources.component.html'
})

export class OpzResourcesComponent implements OnInit {
  subComponents: any = [
    { label: 'Applications', path: 'res-apps' }
  ];
  splashTitle$: Record;
  backgroundStyle = {
    'background-image': "url('../../../../assets/img/NwkLibrary.jpg')"
  };
  constructor(
    public airData: AirService,
    readonly route: ActivatedRoute,
    readonly router: Router) { }

  ngOnInit(): void {
    const records = 'records';
    // tslint:disable-next-line: no-floating-promises
    this.airData.getRecords('PageComps', "filterByFormula=%7BName%7D%3D'Resources+Splash+Title'")
      .subscribe(
        data => {
          this.splashTitle$ = data[records];
        });
  }
}

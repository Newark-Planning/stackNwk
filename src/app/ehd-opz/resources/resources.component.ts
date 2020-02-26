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
    { label: 'Applications', path: 'res-apps' },
    { label: 'Redevelopment Plans', path: 'res-redev' },
    { label: 'Board Minutes', path: 'res-minutes' }
  ];
  splashTitle$: Record;
  backgroundStyle = {
    'background-image': "url('assets/img/NwkLibrary.jpg')"
  };
  button$ = [
    { icon: 'pinboard', index: 1, text: 'Applications', textSmall: 'Applications' },
    { icon: 'building', index: 2, text: 'Master Plans', textSmall: 'Master Plans' },
    { icon: 'bicycle', index: 3, text: 'Redevelopment Plans', textSmall: 'Redevelopments' },
    { icon: 'bicycle', index: 4, text: 'FAQs', textSmall: 'FAQs' }
  ];
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

import {
  Component, OnInit
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Record } from '../../shared/models';
import { AirService } from '../../shared/services/air.service';

@Component({
  selector: 'app-planning-ourcity',
  styleUrls: ['./ourcity.component.scss'],
  templateUrl: './ourcity.component.html'
})
export class OurCityComponent implements OnInit {
  subComponents: any = [
    { label: 'Pipeline Map', path: 'map-pipeline' }
  ];
  splashTitle$: Record;
  backgroundStyle = {
    'background-image': "url('assets/img/NwkLibrary.jpg')"
  };
  button$ = [
    { icon: 'pinboard', index: 1, text: 'Zoning Map', textSmall: 'Zoning' },
    { icon: 'building', index: 2, text: 'Pipeline Map', textSmall: 'Pipeline' },
    { icon: 'bicycle', index: 3, text: 'Transit Map', textSmall: 'Transit' }
  ];

  constructor(
    public airData: AirService,
    readonly route: ActivatedRoute,
    readonly router: Router) { }

  ngOnInit(): void {
    const records = 'records';
    this.airData.getRecords('PageComps', "filterByFormula=%7BName%7D%3D'OurCity+Splash+Title'")
      .subscribe(
        data => {
          this.splashTitle$ = data[records];
        });
  }
}

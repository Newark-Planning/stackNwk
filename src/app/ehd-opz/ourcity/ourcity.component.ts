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
  collapsed = true;
  subComponents: any = [
    { label: 'Pipeline Map', path: 'map-pipeline' }
  ];
  splashTitle$: Record;
  backgroundStyle = {
    'background-image': "url('assets/img/NwkLibrary.jpg')"
  };
  legendItems = [
    {
      children: [
        {
          title: 'Neighborhoods'
        },
        {
          title: 'Wards'
        }
      ],
      icon: 'nodes',
      title: 'Geographies'
    }
  ];
  parcelView;
  mapNavStyle = {
    'border-radius': '.25rem',
    top: '1rem'
  };

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

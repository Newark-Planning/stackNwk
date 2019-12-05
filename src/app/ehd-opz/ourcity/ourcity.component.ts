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
    'background-image': "url('../../../../assets/img/NwkLibrary.jpg')"
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

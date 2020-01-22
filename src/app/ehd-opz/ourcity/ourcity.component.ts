import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Record } from '../../shared/models';
import { AirService } from '../../shared/services/air.service';
import { MapComponent } from './map.component';

@Component({
  selector: 'app-planning-ourcity',
  styleUrls: ['./ourcity.component.scss'],
  templateUrl: './ourcity.component.html'
})
export class OurCityComponent implements OnInit {
  @ViewChild(MapComponent) map: MapComponent;
  collapsed = true;
  splashTitle$: Record;
  backgroundStyle = {
    'background-image': "url('assets/img/NwkLibrary.jpg')"
  };
  legendItems = [
    {
      children: [
        {
          item: 'hoods',
          title: 'Neighborhoods'
        },
        {
          item: 'wards',
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
    readonly router: Router
    ) { }

  ngOnInit(): void {
    const records = 'records';
    this.airData.getRecords('PageComps', "filterByFormula=%7BName%7D%3D'OurCity+Splash+Title'")
      .subscribe(
        data => {
          this.splashTitle$ = data[records];
        });
  }

  changeLayer(layer): any {
    this.map.updateViz(layer);
  }
  changeGeo(layer): any {
    this.map.changeGeo(layer);
  }
}

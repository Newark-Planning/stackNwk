import { Component, OnInit } from '@angular/core';
import { Record } from '../../shared/models';
import { AirService } from '../../shared/services/air.service';

@Component({
  selector: 'app-ehd-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})

export class EhdHomeComponent implements OnInit {
  splashTitle$: Array<Record>;
  article$: Array<Record>;
  name: Array<any>;
  backgroundStyle = {
    'background-image': "url('assets/img/NwkDawn.jpg')"
  };
  button$ = [
    { icon: 'pop-out', index: 1, text: 'Housing', textSmall: 'Housing' },
    { icon: 'pop-out', index: 2, text: 'Opportunity Zones', textSmall: 'Opportunity Zoness' },
    { icon: 'pop-out', index: 3, text: 'Planning & Zoning', textSmall: 'Planning & Zoning', parentLink: '/opz' },
    { icon: 'pop-out', index: 4, text: 'Opportunity Zones', textSmall: 'Opportunity Zones' },
    { icon: 'pop-out', index: 5, text: 'Property Management', textSmall: 'Property Mgmt' },
    { icon: 'pop-out', index: 6, text: 'Rent Control', textSmall: 'Rent Control'}
  ];
  constructor(
    public airData: AirService
  ) { }

  ngOnInit(): void {
    const records = 'records';
    this.airData.getRecords('PageComps', "filterByFormula=%7BName%7D%3D'Homepage+Splash+Title'")
      .subscribe(
        data => {
          this.splashTitle$ = data[records];
        });
  }
}

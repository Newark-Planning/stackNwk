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
    { icon: 'pop-out', index: 1, text: 'Housing', textSmall: 'Housing', parentLink: '/ohf' },
    { icon: 'pop-out', index: 2, text: 'Opportunity Zones', textSmall: 'Opportunity Zones', parentLink: '/oz' },
    { icon: 'pop-out', index: 3, text: 'Planning & Zoning', textSmall: 'Planning & Zoning', parentLink: '/opz' },
    { icon: 'pop-out', index: 4, text: 'Property Management', textSmall: 'Property Mgmt', parentLink: '/opm' },
    { icon: 'pop-out', index: 5, text: 'Rent Control', textSmall: 'Rent Control', parentLink: '/orc'},
    { icon: 'pop-out', index: 6, text: 'Tenant Legal Services', textSmall: 'Tenant Legal Services', parentLink: '/otls' }
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

import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api/treenode';
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
    'background-image': "url('assets/img/NwkDawn.jpg')",
    height: '33vh',
    padding: '1.25rem'
  };
  button$ = [
    { icon: 'pop-out', index: 1, text: 'Housing', textSmall: 'Housing', parentLink: '/ohf' },
    { icon: 'pop-out', index: 2, text: 'Opportunity Zones', textSmall: 'Opportunity Zones', parentLink: '/oz' },
    { icon: 'pop-out', index: 3, text: 'Planning & Zoning', textSmall: 'Planning & Zoning', parentLink: '/opz' },
    { icon: 'pop-out', index: 4, text: 'Property Management', textSmall: 'Property Mgmt', parentLink: '/opm' },
    { icon: 'pop-out', index: 5, text: 'Rent Control', textSmall: 'Rent Control', parentLink: '/orc'},
    { icon: 'pop-out', index: 6, text: 'Tenant Legal Services', textSmall: 'Tenant Legal Services', parentLink: '/otls' }
  ];
  selectedNode: TreeNode;
  ehdOrg: Array<any> = [
    { text: 'Housing', officer: 'Chris Watson', parentLink: '/ohf' },
    { text: 'Opportunity Zones', officer: 'Chris Watson', parentLink: '/oz' },
    { text: 'Planning & Zoning', officer: 'Chris Watson', parentLink: '/opz' },
    { text: 'Property Management', officer: 'Chris Watson', parentLink: '/opm' },
    { text: 'Rent Control', officer: 'Chris Watson', parentLink: '/orc'},
    { text: 'Tenant Legal Services', officer: 'Chris Watson', parentLink: '/otls' }
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

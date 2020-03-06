import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api/treenode';
import { HomePage } from '../../shared/models';

@Component({
  selector: 'app-ehd-home',
  // tslint:disable: component-max-inline-declarations template-use-track-by-function template-i18n
  template: `
      <app-home [homePage]="homePageDetails">
        <div secondary-content class="p-grid" [style]="{'height':'50vh'}">
            <p-card header="Director Allison Ladd" class="p-md-4 p-col-12" [style]="{'height':'100%', 'padding':'1rem','text-align':'center'}">
                <p-header [style]="{'display':'flex','justify-content': 'center'}">
                    <img class="p-lg-6 p-col-12" src="../../../assets/img/Allison_Fitzgibbon.png" [style]="{'padding':'0','width': 'auto','max-height': '33vh','border-radius': '.25rem','border':'10px solid white'}">
                </p-header>
                <p-footer>
                    <button class="btn btn-success btn-lg btn-block " routerLink="/ehd/about">
                        <clr-icon [attr.shape]='"users"' size='24'></clr-icon>
                        <span>About EHD</span>
                    </button>
                </p-footer>
            </p-card>
            <p-card header="Our Offices" class="p-md-8 p-col-12" [style]="divisions">
              <div class="p-grid p-justify-even" [style]="divisionsDiv">
                  <p-button *ngFor="let node of ehdOrg" label="Led by {{ node.officer }}" icon="pi pi-external-link" iconPos="right" class="p-md-6 p-col-12" [style]="divisionButton" [routerLink]="node.parentLink">
                      <h2 [style]="{'font-size': '1rem', 'line-height': '2rem', 'margin': 'auto', 'font-weight':'600'}">{{ node.text }}</h2>
                  </p-button>
              </div>
            </p-card>
        </div>
      </app-home>
  `
})

export class EhdHomeComponent {
  homePageDetails: HomePage = {
    backgroundStyling: {
      background: 'url(assets/img/NwkCitySky.png) center center / cover, rgb(10, 189, 183)',
      'background-attachment': 'fixed',
      'background-blend-mode': 'soft-light',
      height: '33vh',
      padding: '2rem'
    },
    division: false,
    searchDisplay: 'inherit',
    splashTitle$: 'Welcome to EHD'
  };
  divisionButton = {
    width: '100%'
  };
  divisions = {
    background: 'url(assets/img/NwkCitySky.png) center center / cover, rgb(13, 71, 161)',
    'background-attachment': 'fixed',
    'background-blend-mode': 'soft-light',
    color: 'white',
    'font-size': '1.5rem',
    'text-align': 'center'
  };
  divisionsDiv = {
    margin: 'auto',
    'min-height': '45vh'
  };
  selectedNode: TreeNode;
  ehdOrg: Array<any> = [
    { index: 0, text: 'Affordable Housing', officer: 'Vacant', parentLink: '/ah' },
    { index: 1, text: 'Housing', officer: 'Jenine Hazzard-Williams', parentLink: '/ohf' },
    { index: 2, text: 'Opportunity Zones', officer: 'Chi', parentLink: '/oz' },
    { index: 3, text: 'Planning & Zoning', officer: 'Chris Watson', parentLink: '/opz' },
    { index: 4, text: 'Property Management', officer: 'Keith Hamilton', parentLink: '/opm' },
    { index: 5, text: 'Rent Control', officer: 'Jay Lee', parentLink: '/orc'},
    { index: 6, text: 'Tenant Legal Services', officer: 'Khabirah', parentLink: '/otls' }
  ];
}

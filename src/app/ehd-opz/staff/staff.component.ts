import { Clipboard } from '@angular/cdk/clipboard';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Page, Record } from '../../shared/models';
import { AirService } from '../../shared/services/air.service';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [MessageService],
  selector: 'app-opz-staff',
  styleUrls: ['./staff.component.scss'],
  templateUrl: './staff.component.html'
})

export class OpzStaffComponent implements OnInit {
  staff$: Array<Record>;
  activeFragment;
  activeViewName;
  pageDetails: Page = {
    backgroundStyling: {
      background: 'url(assets/img/NwkCitySky.png) center center / cover, rgb(10, 189, 183)',
      'background-attachment': 'fixed',
      'background-blend-mode': 'soft-light',
      height: '33vh',
      padding: '2rem'
    },
    division: 'Planning & Zoning',
    searchDisplay: 'none',
    subComponents: [
      { icon: 'calendar', index: 1, text: 'Our Leadership', textSmall: 'Leadership', link: 'leadership' },
      { icon: 'file', index: 2, text: 'Planning Staff', textSmall: 'Planning', link: 'planners' },
      { icon: 'map', index: 3, text: 'Zoning & Support Staff', textSmall: 'Zoning & Support', link: 'support' }
    ]
  };

  constructor(
    public airData: AirService,
    public clipboard: Clipboard,
    public messageService: MessageService,
    private readonly router: Router
    ) { }

  ngOnInit(): void {
    this.activeFragment = this.router.url.slice(this.router.url.lastIndexOf('/') + 1);
    this.getTab(this.activeFragment);
    const records = 'records';
    // tslint:disable-next-line: no-floating-promises
    this.airData.getRecords('PageComps', "filterByFormula=%7BName%7D%3D'Staff+Splash+Title'")
      .subscribe(
        data => {
          this.pageDetails.splashTitle$ = data[records];
        });
  }
  copySuccess(object): any {
    this.messageService.add({ severity: 'success', summary: 'Copied!', detail: object, life: 1000 });
  }
  getTab(view): any {
    this.airData.getAzureData('staff', '')
      .subscribe(data => this.staff$ = data);
  }
  copyVal(val, object): any {
    this.clipboard.copy(val);
    this.copySuccess(object);
  }
}

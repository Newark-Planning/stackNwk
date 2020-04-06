import { Clipboard } from '@angular/cdk/clipboard';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { MongoDB } from '../../shared/controllers';
import { Page } from '../../shared/models';
import { StaffModel } from '../../shared/models/mongo';
import { AirService } from '../../shared/services/air.service';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [MessageService],
  selector: 'app-opz-staff',
  styleUrls: ['./staff.component.scss'],
  templateUrl: './staff.component.html'
})

export class OpzStaffComponent implements OnInit {
  staff$: Array<StaffModel>;
  activeFragment: string;
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
      { icon: 'file', index: 2, text: 'Planning Staff', textSmall: 'Planning', link: 'planning' },
      { icon: 'map', index: 3, text: 'Zoning & Support Staff', textSmall: 'Zoning & Support', link: 'support' }
    ]
  };

  constructor(
    public airData: AirService,
    public clipboard: Clipboard,
    public messageService: MessageService,
    public mongo: MongoDB,
    private readonly router: Router
    ) { }

  ngOnInit(): void {
    this.activeFragment = this.router.url.slice(this.router.url.lastIndexOf('/') + 1);
    this.getTab(this.activeFragment);
  }
  copySuccess(object): any {
    this.messageService.add({ severity: 'success', summary: 'Copied!', detail: object, life: 1000 });
  }
  getTab(view: string): any {
    this.mongo._models.Staff
      .find({Class: view}, staff => this.staff$ = staff);
  }
  copyVal(val, object): any {
    this.clipboard.copy(val);
    this.copySuccess(object);
  }
}

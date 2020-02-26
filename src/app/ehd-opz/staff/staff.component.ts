import { Clipboard } from '@angular/cdk/clipboard';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Record, SubComponent } from '../../shared/models';
import { AirService } from '../../shared/services/air.service';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [MessageService],
  selector: 'app-opz-staff',
  styleUrls: ['./staff.component.scss'],
  templateUrl: './staff.component.html'
})

export class OpzStaffComponent implements OnInit {
  splashTitle$: Record;
  staff$: Array<Record>;
  activeFragment;
  activeViewName;
  backgroundStyle = {
    'background-image': "url('assets/img/NwkCitySky.png')"
  };
  subComponents: Array<SubComponent | any>;
  button$ = [
    { icon: 'calendar', index: 1, text: 'Board Meetings', textSmall: 'Board Meetings' },
    { icon: 'file', index: 2, text: 'Plans & Documents', textSmall: 'Plans & Docs' },
    { icon: 'map', index: 3, text: 'Zoning Map', textSmall: 'Zoning Map' },
    { icon: 'pop-out', index: 4, text: 'Application Portal', textSmall: 'Applications' }
  ];

  constructor(
    public airData: AirService,
    public clipboard: Clipboard,
    public messageService: MessageService,
    private readonly router: Router
    ) {
      this.subComponents = [
        { label: 'Our Leadership', path: 'leadership' },
        { label: 'Planning Staff', path: 'planners' },
        { label: 'Zoning & Support Staff', path: 'support' }
      ];
    }

  ngOnInit(): void {
    this.activeFragment = this.router.url.slice(this.router.url.lastIndexOf('/') + 1);
    this.getTab(this.activeFragment);
    const records = 'records';
    // tslint:disable-next-line: no-floating-promises
    this.airData.getRecords('PageComps', "filterByFormula=%7BName%7D%3D'Staff+Splash+Title'")
      .subscribe(
        data => {
          this.splashTitle$ = data[records];
        });
  }
  copySuccess(object): any {
    this.messageService.add({ severity: 'success', summary: 'Copied!', detail: object, life: 1000 });
  }
  getTab(view): any {
    const records = 'records';
    this.airData.getRecords('Staff', `view=${view}`)
      .subscribe(
        data => {
          this.staff$ = data[records];
        });
  }
  copyVal(val, object): any {
    this.clipboard.copy(val);
    this.copySuccess(object);
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { OverlayPanel } from 'primeng/overlaypanel';
import { ApplicationProcess, defaultApp } from '../../../../../assets/data/appData.interface';

@Component({
  selector: 'app-resources-applications',
  styleUrls: ['../../resources.component.scss'],
  templateUrl: './applications.component.html'
})

export class ApplicationsDataComponent implements OnInit {
  @ViewChild('statusPanel') statusPanel: OverlayPanel;
  appStatus: Array<MenuItem>;
  currentStepData;
  starterApp = defaultApp;
  appData: ApplicationProcess;

  ngOnInit(): void {
    this.appStatus = [
      {
        command: (event: Event) => { this.geAppStatusInfo('Step1', event); },
        id: 'Step1',
        label: 'Step 1'
      },
      {
        command: (event: Event) => { this.geAppStatusInfo('Step2', event); },
        id: 'Step2',
        label: 'Step 2'
      },
      {
        command: (event: Event) => { this.geAppStatusInfo('Step3', event); },
        id: 'Step3',
        label: 'Step 3'
      },
      {
        command: (event: Event) => { this.geAppStatusInfo('Step4', event); },
        id: 'Step4',
        label: 'Step 4'
      },
      {
        command: (event: Event) => { this.geAppStatusInfo('Step5', event); },
        id: 'Step5',
        label: 'Step 5'
      },
      {
        command: (event: Event) => { this.geAppStatusInfo('Step6', event); },
        id: 'Step6',
        label: 'Step 6'
      }
    ];
  }
  geAppStatusInfo(step: string, event: Event): any {
    this.appData = this.starterApp;
    this.currentStepData = this.appData[step];
    this.statusPanel.show(event);
  }
}

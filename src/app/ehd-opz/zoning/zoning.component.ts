import { Clipboard } from '@angular/cdk/clipboard';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

import { routeAnimations } from '../../core/core.module';
import { LotComponent } from './diagrams/lot.component';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { buildingTypes, getDimensions, getReqs } from './zoning.model';

@Component({
  animations: [routeAnimations],
  selector: 'app-planning-zoning',
  styleUrls: ['./zoning.component.scss'],
  templateUrl: './zoning.component.html'
})
export class OpzZoningComponent implements OnInit {
  @ViewChild(LotComponent) lotComponent: LotComponent;
  @ViewChild('reqReport') report: ElementRef;
  @Input() reportVal;
  zoneOptions: Array<string> = [
    'R-1',
    'R-2',
    'R-3',
    'R-4',
    'R-5',
    'R-6',
    'C-1',
    'C-2',
    'C-3',
    'I-1',
    'I-2',
    'I-3',
    'MX-1',
    'MX-2',
    'MX-3',
    'INST',
    'EWR-S'
  ];
  @Input() zoneName;
  @Input() zoneSelect;
  opened = false;
  buildingTypes: Iterable<string> = ['One-family'];
  @Input() bldgTypeSel;
  @Input() bldgType;
  @Input() dimensions: any;
  // tslint:disable-next-line: no-non-null-assertion
  currentReqs = getReqs('R-1', 'One-family');
  diagramUpdater = new FormGroup({
    bldgTypes: new FormControl('One-family', [ Validators.required ]),
    zones: new FormControl('R-1', [ Validators.required ])
  });
  constructor(public clipboard: Clipboard) { }
  ngOnInit(): void {
    this.dimensions = getDimensions('R-1', 'One-family');
  }

  changeTypes(zone): any {
    this.buildingTypes = buildingTypes(this.zoneName);
  }

  changeDiagram(newZone, newBldgType): void {
    this.dimensions = getDimensions(newZone, newBldgType);
    this.currentReqs = getReqs(newZone, newBldgType);
    this.bldgTypeSel = newBldgType;
    this.zoneSelect = newZone;
  }

  copyReqs(): any {
    this.reportVal = this.report.nativeElement.innerText;
    const pending = this.clipboard.beginCopy(this.reportVal);
    let remainingAttempts = 3;
    const attempt = () => {
      const result = pending.copy();
      // tslint:disable-next-line: increment-decrement
      if (!result && --remainingAttempts) {
        setTimeout(attempt);
      } else {
        // Remember to destroy when you're done!
        pending.destroy();
      }
    };
    setTimeout(attempt);
  }
}

import { Component, Input, ViewChild } from '@angular/core';

import { routeAnimations } from '../../core/core.module';
import { LotComponent } from './diagrams/lot.component';

import { buildingTypes } from './zoning.model';

@Component({
  animations: [routeAnimations],
  selector: 'app-planning-zoning',
  styleUrls: ['./zoning.component.scss'],
  templateUrl: './zoning.component.html'
})
export class OpzZoningComponent {
  @ViewChild(LotComponent) lotComponent: LotComponent;
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
  buildingtypes = buildingTypes;
  @Input() zoneName;
  @Input() bldgType;
  dimensions;

  changeDiagram(newZone, bldgType): any {
    this.lotComponent.updateDiagram(newZone, bldgType);
  }
}

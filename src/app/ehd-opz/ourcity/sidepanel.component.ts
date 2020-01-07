import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CartoService } from '../../shared/services';

import { MapInput, ZoningFields } from '../../shared/models/map.input';

@Component({
    encapsulation: ViewEncapsulation.ShadowDom,
    selector: 'app-sidepanel',
    styleUrls: ['./ourcity.component.scss'],
    templateUrl: './sidepanel.component.html'
})

export class SidePanelComponent {
    @Input() mapInput: MapInput = {
        hood: 'Click on a neighborhood to learn about it',
        zoneColor: 'black'
    };
    @Input() propInfo: ZoningFields;
    constructor(
        public blocklot: CartoService
        ) {  }
}

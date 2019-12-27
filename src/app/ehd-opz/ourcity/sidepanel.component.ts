import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-sidepanel',
    styleUrls: ['./ourcity.component.scss'],
    templateUrl: './sidepanel.component.html'
})

export class SidePanelComponent {
    @Input() mapInput: MapInput;
}

export interface MapInput {
    hood?: string;
    lot?: string;
}

import { Component, Input, TemplateRef } from '@angular/core';

@Component({
    selector: 'app-sidepanel',
    styleUrls: ['./ourcity.component.scss'],
    templateUrl: './sidepanel.component.html'
})

export class SidePanelComponent {
    @Input() mapInput: TemplateRef<any>;
}

import { Component, Input } from '@angular/core';

import { MyRoute } from '../../models';

@Component({
  selector: 'app-content-container',
  styleUrls: ['../../../../theme.scss'],
  templateUrl: './container.component.html'
})

export class ContainerComponent {
  collapsed = true;
  @Input() parentFragment: string;
  @Input() sideMenuItems: Array<MyRoute>;
}

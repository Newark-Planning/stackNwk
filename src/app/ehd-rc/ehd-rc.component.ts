import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { MyRoute } from '../shared/models';
import { RC_ROUTES } from './ehd-rc-routing.module';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-rc-container',
  styleUrls: ['../app.component.scss'],
  templateUrl: './ehd-rc.component.html'
})

export class EhdRcComponent {
  collapsed = true;
  @HostBinding('class.content-container') class = true;
  @Input() parentFragment = '/rc';
  @Input() sideMenuItems: Array<MyRoute> =
    RC_ROUTES
      .filter(route => route.data)
      .map(route => {
        const routedata = route.data ? route.data : '';
        const icon = 'icon';
        const title = 'title';

        return {
          icon: routedata[icon],
          path: route.path,
          title: routedata[title]
        };
      });
}

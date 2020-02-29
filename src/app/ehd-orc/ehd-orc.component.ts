import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { MyRoute } from '../shared/models';
import { ORC_ROUTES } from './ehd-orc-routing.module';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-orc-container',
  styleUrls: ['../app.component.scss'],
  templateUrl: './ehd-orc.component.html'
})

export class EhdOrcComponent {
  collapsed = true;
  @HostBinding('class.content-container') class = true;
  @Input() parentFragment = '/orc';
  @Input() sideMenuItems: Array<MyRoute> =
    ORC_ROUTES
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

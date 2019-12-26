import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { PLANNING_ROUTES } from './ehd-opz-routing.module';

import { MyRoute } from '../shared/models';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-ehd-opz',
  styleUrls: ['../app.component.scss'],
  templateUrl: './ehd-opz.component.html'
})

export class EhdOpzComponent {
  collapsed = true;
  @HostBinding('class.content-container') class = true;
  @Input() parentFragment = '/opz';
  @Input() sideMenuItems: Array<MyRoute> =
    PLANNING_ROUTES
      .filter(route => route.data)
      .map(route => {
        const routedata = route.data ? route.data : '';
        const routeChildren =
          route.children ?
          route.children.filter(child => child.data)
            .map(childroute => {
              const childroutedata = childroute.data ? childroute.data : '';
              const icon = 'icon';
              const title = 'title';

              return {
                icon: childroutedata[icon],
                path: childroute.path,
                title: childroutedata[title]
              };
            }
          )
          : undefined;
        const icon = 'icon';
        const title = 'title';

        return {
          children: routeChildren,
          icon: routedata[icon],
          path: route.path,
          title: routedata[title]
        };
      });
}

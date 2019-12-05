import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { MyRoute } from '../shared/models';
import { EHD_ROUTES } from './ehd-main-routing.module';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-ehd-container',
  styleUrls: ['../app.component.scss'],
  templateUrl: './ehd-main.component.html'
})

export class EhdMainComponent {
  collapsed = true;
  @HostBinding('class.content-container') class = true;
  @Input() parentFragment = '/opz';
  @Input() sideMenuItems: Array<MyRoute> =
    EHD_ROUTES
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

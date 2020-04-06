import { ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';

import { PLANNING_ROUTES, PLANNING_ROUTING } from './ehd-opz-routing.module';

import { SidebarLink } from '../shared/interfaces/other.interface';
import { SharedModule } from '../shared/shared.module';
import * as SidebarActions from '../store/sidebar/sidebar.actions';
import * as fromStore from '../store/store.reducers';
import * as components from './index';
import { MapComponent } from './ourcity/map.component';

@NgModule({
  declarations: [
    components.planningComponents,
    components.planningMapComponents,
    components.planningResComponents,
    components.planningZonesComponents,
    MapComponent
  ],
  imports: [
    ClipboardModule,
    CommonModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    PLANNING_ROUTING
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EhdOpzModule {
  collapsed = true;
  sideMenuItems: Array<SidebarLink> =
  // tslint:disable: no-non-null-assertion
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
                  link: childroute.path!,
                  name: childroutedata[title]
                };
              }
              )
            : undefined;
        const icon = 'icon';
        const title = 'title';

        return {
          children: routeChildren,
          icon: routedata[icon],
          link: route.path!,
          name: routedata[title]
        };
      });
  constructor(private readonly store: Store<fromStore.StoreState>) {
    this.store.dispatch(
      new SidebarActions.SetSidebarRoutes(this.sideMenuItems)
    );
  }
}

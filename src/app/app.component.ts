import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import { StoreConfig } from './shared/interfaces/config.interface';
import { SidebarLink } from './shared/interfaces/other.interface';
import * as ConfigActions from './store/config/config.actions';
import * as SidebarActions from './store/sidebar/sidebar.actions';
import * as RightSidebarActions from './store/sidebarRight/sidebar.actions';
import * as fromStoreActions from './store/store.actions';
import * as fromStore from './store/store.reducers';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
  divisions = [
    { name: 'Housing', path: '#' },
    { name: 'Opportunity Zones', path: '#' },
    { name: 'Planning & Zoning', path: '/opz' },
    { name: 'Property Management', path: '/opm' },
    { name: 'Rent Control', path: '/rc' },
    { name: 'Tenant Legal Services', path: '#' }
  ];

  storeConfig: StoreConfig;
  sidebarOpenedSubscription: Subscription;
  deptDisplay: boolean;
  selectedModule$: Observable<string>;

  title$: Observable<string>;

  hasSidebar$: Observable<boolean>;
  sidebarOpened$: Observable<boolean>;
  sidebarMode$: Observable<string>;
  hasSidebarRight$: Observable<boolean>;
  sidebarRightOpened$: Observable<boolean>;
  sidebarRightMode$: Observable<string>;
  sidebarLinks$: Observable<Array<SidebarLink>>;

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    public titleService: Title,
    private readonly store: Store<fromStore.StoreState>,
    public breakpointObserver: BreakpointObserver) {
      this.selectedModule$ = this.store.select(state => state.sidebar.selectedModule);
      this.title$ = this.store.select(state => state.sidebar.title);
      this.hasSidebar$ = this.store.select(state => state.sidebar.hasSidebar);
      this.sidebarOpened$ = this.store.select(state => state.sidebar.opened);
      this.sidebarMode$ = this.store.select(state => state.sidebar.mode);
      this.sidebarLinks$ = this.store.select(state => state.sidebar.sidebarRoutes);
      this.hasSidebarRight$ = this.store.select(state => state.sidebarRight.hasSidebar);
      this.sidebarRightOpened$ = this.store.select(state => state.sidebarRight.opened);
      this.sidebarRightMode$ = this.store.select(state => state.sidebarRight.mode);
  }

  ngOnInit(): void {
    this.store.dispatch(new fromStoreActions.ClearState());
    this.deptDisplay = this.breakpointObserver.isMatched('(max-width: 768px)');
    this.storeConfig = {
      sidebar: {
        collapsible: true,
        mode: 'side',
        opened: false
      },
      sidebarRight: {
        collapsible: true,
        mode: 'over',
        opened: false
      }
    };
    this.store.dispatch(new ConfigActions.SetConfig(this.storeConfig));
    if (typeof this.storeConfig !== 'undefined' && this.storeConfig !== null) {
      // register the config in the Store
      this.store.dispatch(
        new SidebarActions.SetHasSidebar(!!this.storeConfig.sidebar)
      );
      if (!!this.storeConfig.sidebar) {
        /**
         * Basic sidebar options
         */
        if (!!this.storeConfig.sidebar.collapsible) {
          this.store.dispatch(
            new SidebarActions.SetCollapsible(this.storeConfig.sidebar.collapsible)
          );
        }
        if (!!this.storeConfig.sidebar.mode) {
          this.store.dispatch(
            new SidebarActions.SetMode(this.storeConfig.sidebar.mode)
          );
        }
        if (!!this.storeConfig.sidebar.opened) {
          this.store.dispatch(
            new SidebarActions.SetOpened(this.storeConfig.sidebar.opened)
          );
        }
        if (!!this.storeConfig.sidebar.title) {
          this.store.dispatch(
            new SidebarActions.SetTitle(this.storeConfig.sidebar.title)
          );
        }
      }
    } else {
      this.store.dispatch(new SidebarActions.SetHasSidebar(false));
    }
    this.store.dispatch(new RightSidebarActions.SetHasSidebar(true));
    if (!!this.storeConfig.sidebarRight) {
      /**
       * Basic sidebar options
       */
      if (!!this.storeConfig.sidebarRight.collapsible) {
        this.store.dispatch(
          new RightSidebarActions.SetCollapsible(this.storeConfig.sidebarRight.collapsible)
        );
      }
      if (!!this.storeConfig.sidebarRight.mode) {
        this.store.dispatch(
          new RightSidebarActions.SetMode(this.storeConfig.sidebarRight.mode)
        );
      }
      if (!!this.storeConfig.sidebarRight.opened) {
        this.store.dispatch(
          new RightSidebarActions.SetOpened(this.storeConfig.sidebarRight.opened)
        );
      }
      if (!!this.storeConfig.sidebarRight.title) {
        this.store.dispatch(
          new RightSidebarActions.SetTitle(this.storeConfig.sidebarRight.title)
        );
      }
    }
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        map(() => {
          let route = this.activatedRoute;
          // find first route with a title set (if any)
          while (!this.getTitle(route) && route.firstChild) {
            route = route.firstChild;
          }

          return route;
        }),
        filter(route => route.outlet === 'primary'),
        map(route => this.getTitle(route)),
        filter((title): title is string => title !== undefined)
      )
      .subscribe(title => {
        this.titleService.setTitle(title);
      });
  }

  ngOnDestroy(): void {
    if (this.sidebarOpenedSubscription) {
      this.sidebarOpenedSubscription.unsubscribe();
    }
  }

  getTitle(route: ActivatedRoute): string | undefined {
    const routeData = route.snapshot.data;
    if (routeData.title) {
      return routeData.title;
    }

    return undefined;
  }

  toggleSidebar(currentSidebar: string): void {
    switch (currentSidebar) {
      case 'left':
        this.store.dispatch(new SidebarActions.Toggle());
        break;
      default:
        this.store.dispatch(new RightSidebarActions.Toggle());
        break;
    }
  }

  onOpenedChange(evt: boolean): void {
    this.store
      .select(state => state.sidebar.opened)
      .pipe(take(1))
      .subscribe(opened => {
        if (opened !== evt) {
          this.store.dispatch(new SidebarActions.Toggle());
        }
      });
  }
  onRightOpenedChange(evt: boolean): void {
    this.store
      .select(state => state.sidebarRight.opened)
      .pipe(take(1))
      .subscribe(opened => {
        if (opened !== evt) {
          this.store.dispatch(new RightSidebarActions.Toggle());
        }
      });
  }
}

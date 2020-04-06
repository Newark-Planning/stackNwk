import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { StoreConfig } from '../shared/interfaces/config.interface';
import { SidebarLink } from '../shared/interfaces/other.interface';
import * as StoreActions from '../store/store.actions';
import * as fromStore from '../store/store.reducers';
import * as ConfigActions from './config/config.actions';
import * as fromConfig from './config/config.reducers';
import * as SidebarActions from './sidebar/sidebar.actions';
import * as fromSidebar from './sidebar/sidebar.reducers';
import * as RightSidebarActions from './sidebarRight/sidebar.actions';
import * as fromRightSidebar from './sidebarRight/sidebar.reducers';

@Injectable({
    providedIn: 'root'
})
export class StoreService {
    configState$: Observable<fromConfig.State>;
    sidebarState$: Observable<fromSidebar.State>;
    rightSidebarState$: Observable<fromRightSidebar.State>;

    constructor(private readonly store: Store<fromStore.StoreState>) {
        this.configState$ = this.store.select(state => state.config);
        this.sidebarState$ = this.store.select(state => state.sidebar);
        this.rightSidebarState$ = this.store.select(state => state.sidebarRight);
    }

    /**
     * Resets the Store State
     */
    resetStoreState(): void {
        this.store.dispatch(new StoreActions.ClearState());
    }

    /*
     * CONFIG state functions
     */

    setConfig(config: StoreConfig): void {
        this.store.dispatch(new ConfigActions.SetConfig(config));
    }

    /*
     * SIDEBAR state functions
     */

    toggleSidebar(): void {
        this.store.dispatch(new SidebarActions.Toggle());
    }
    setHasSidebar(hasSidebar: boolean): void {
        this.store.dispatch(new SidebarActions.SetHasSidebar(hasSidebar));
    }
    setSidebarMode(mode: string): void {
        this.store.dispatch(new SidebarActions.SetMode(mode));
    }
    setSidebarCollapsible(collapsible: boolean): void {
        this.store.dispatch(new SidebarActions.SetCollapsible(collapsible));
    }
    setSidebarOpened(opened: boolean): void {
        this.store.dispatch(new SidebarActions.SetOpened(opened));
    }
    setSidebarTitle(title: string): void {
        this.store.dispatch(new SidebarActions.SetTitle(title));
    }
    setSidebarSelectedModule(module: string): void {
        this.store.dispatch(new SidebarActions.SetSelectedModule(module));
    }
    setSidebarRoutes(routes: Array<SidebarLink>): void {
        this.store.dispatch(new SidebarActions.SetSidebarRoutes(routes));
    }
 /*
 * Right SIDEBAR state functions
 */
    toggleRightSidebar(): void {
        this.store.dispatch(new RightSidebarActions.Toggle());
    }
    setHasRightSidebar(hasSidebar: boolean): void {
        this.store.dispatch(new RightSidebarActions.SetHasSidebar(hasSidebar));
    }
    setRightSidebarMode(mode: string): void {
        this.store.dispatch(new RightSidebarActions.SetMode(mode));
    }
    setRightSidebarCollapsible(collapsible: boolean): void {
        this.store.dispatch(new RightSidebarActions.SetCollapsible(collapsible));
    }
    setRightSidebarOpened(opened: boolean): void {
        this.store.dispatch(new RightSidebarActions.SetOpened(opened));
    }
    setRightSidebarTitle(title: string): void {
        this.store.dispatch(new RightSidebarActions.SetTitle(title));
    }
    setRightSidebarSelectedModule(module: string): void {
        this.store.dispatch(new RightSidebarActions.SetSelectedModule(module));
    }
}

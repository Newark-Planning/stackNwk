import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromStore from '../../../store/store.reducers';
import {
  shownStateTrigger,
  sidebarButtonStateTrigger
} from '../../animations';
import * as SidebarActions from './../../../store/sidebar/sidebar.actions';
import * as RightSidebarActions from './../../../store/sidebarRight/sidebar.actions';

@Component({
  animations: [sidebarButtonStateTrigger, shownStateTrigger],
  selector: 'app-sidebar-button',
  styleUrls: ['./sidebar-button.component.scss'],
  templateUrl: './sidebar-button.component.html'
})
export class SidebarButtonComponent {
  @Input() iconName;
  sidebarOpened$: Observable<boolean>;
  sidebarRightOpened$: Observable<boolean>;

  constructor(private readonly store: Store<fromStore.StoreState>) {
    this.sidebarOpened$ = this.store.select(state => state.sidebar.opened);
    this.sidebarRightOpened$ = this.store.select(state => state.sidebarRight.opened);
  }

  toggleSidebar(): void {
    this.store.dispatch(new SidebarActions.Toggle());
  }

  toggleRightSidebar(): void {
    this.store.dispatch(new RightSidebarActions.Toggle());
  }
}

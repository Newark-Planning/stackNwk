import { SidebarLink } from '../../shared/interfaces/other.interface';
import * as SidebarActions from './sidebar.actions';

export interface State {
  collapsible: boolean;
  hasSidebar: boolean;
  opened: boolean;
  mode: string;
  selectedModule: string;
  sidebarRoutes: Array<SidebarLink>;
  title: string;
}

const initialState: State = {
  collapsible: true,
  hasSidebar: false,
  mode: 'side',
  opened: false,
  selectedModule: '',
  sidebarRoutes: [],
  title: ''
};

export const sidebarReducer = (
  state = initialState,
  action: SidebarActions.SidebarActions
) => {
  switch (action.type) {
    case SidebarActions.TOGGLE:
      return { ...state, opened: !state.opened };
    case SidebarActions.SET_HAS_SIDEBAR:
      return { ...state, hasSidebar: action.payload };
    case SidebarActions.SET_MODE:
      return { ...state, mode: action.payload };
    case SidebarActions.SET_COLLAPSIBLE:
      return { ...state, collapsible: action.payload };
    case SidebarActions.SET_OPENED:
      return { ...state, opened: action.payload };
    case SidebarActions.SET_TITLE:
      return { ...state, title: action.payload };
    case SidebarActions.SET_SELECTED_MODULE:
      return { ...state, selectedModule: action.payload };
    case SidebarActions.SET_SIDEBAR_ROUTES:
      return { ...state, sidebarRoutes: action.payload };
    default:
      return state;
  }
};

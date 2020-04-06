import * as SidebarRightActions from './sidebar.actions';

export interface State {
  collapsible: boolean;
  hasSidebar: boolean;
  mode: string;
  opened: boolean;
  selectedModule: string;
  title: string;
}

const initialState: State = {
  collapsible: true,
  hasSidebar: true,
  mode: 'over',
  opened: false,
  selectedModule: '',
  title: ''
};

export const sidebarRightReducer = (
  state = initialState,
  action: SidebarRightActions.SidebarRightActions
) => {
  switch (action.type) {
    case SidebarRightActions.TOGGLE:
      return { ...state, opened: !state.opened };
    case SidebarRightActions.SET_HAS_SIDEBAR:
      return { ...state, hasSidebar: action.payload };
    case SidebarRightActions.SET_MODE:
      return { ...state, mode: action.payload };
    case SidebarRightActions.SET_COLLAPSIBLE:
      return { ...state, collapsible: action.payload };
    case SidebarRightActions.SET_OPENED:
      return { ...state, opened: action.payload };
    case SidebarRightActions.SET_TITLE:
      return { ...state, title: action.payload };
    case SidebarRightActions.SET_SELECTED_MODULE:
      return { ...state, selectedModule: action.payload };
    default:
      return state;
  }
};

import { OpzAboutComponent } from './about/about.component';
import { OpzBoardsComponent } from './boards/boards.component';
import { OpzContactComponent } from './contact/contact.component';
import { OpzHomeComponent } from './home/home.component';
import { OurCityComponent } from './ourcity/ourcity.component';
import { OpzPlanningComponent } from './planning/planning.component';
import { OpzResourcesComponent } from './resources/resources.component';
import { OpzStaffComponent } from './staff/staff.component';
import { OpzZoningComponent } from './zoning/zoning.component';

// Resources page component imports
import { ApplicationsDataComponent } from './resources/sub-pages/applications/applications.component';
import { RedevDataComponent } from './resources/sub-pages/redev/redev.component';

import { SidePanelComponent } from './ourcity/sidepanel.component';
import { DiagramsComponent } from './zoning/diagrams/diagrams.component';
import { LotComponent } from './zoning/diagrams/lot.component';
import { OpzZoningInfoComponent } from './zoning/sub-pages/info/info.component';
import { OpzZoningRegsComponent } from './zoning/sub-pages/regs/regs.component';
import { OpzZoningResComponent } from './zoning/sub-pages/res/res.component';

export const planningComponents = [
  OpzHomeComponent,
  OpzAboutComponent,
  OpzBoardsComponent,
  OpzStaffComponent,
  OurCityComponent,
  OpzPlanningComponent,
  OpzResourcesComponent,
  OpzZoningComponent,
  OpzContactComponent
];

export const planningMapComponents = [
  SidePanelComponent
];

export const planningResComponents = [
  ApplicationsDataComponent,
  RedevDataComponent
];

export const planningZonesComponents = [
  DiagramsComponent,
  OpzZoningInfoComponent,
  OpzZoningRegsComponent,
  OpzZoningResComponent,
  LotComponent
];
// page component exports
export * from './about/about.component';
export * from './boards/boards.component';
export * from './contact/contact.component';
export * from './home/home.component';
export * from './ourcity/ourcity.component';
export * from './planning/planning.component';
export * from './resources/resources.component';
export * from './staff/staff.component';
export * from './zoning/zoning.component';

// Our City page components exports
export *  from './ourcity/sidepanel.component';
export * from './ourcity/sidepanel.component';

// Resources page components exports
export * from './resources/sub-pages/applications/applications.component';
export * from './resources/sub-pages/redev/redev.component';

export * from './zoning/diagrams/diagrams.component';
export * from './zoning/sub-pages/info/info.component';
export * from './zoning/sub-pages/regs/regs.component';
export * from './zoning/sub-pages/res/res.component';
export * from './zoning/diagrams/lot.component';

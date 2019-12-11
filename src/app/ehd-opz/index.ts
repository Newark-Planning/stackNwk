import { OpzAboutComponent } from './about/about.component';
import { OpzBoardsComponent } from './boards/boards.component';
import { OpzContactComponent } from './contact/contact.component';
import { OpzHomeComponent } from './home/home.component';
import { OurCityComponent } from './ourcity/ourcity.component';
import { OpzPlanningComponent } from './planning/planning.component';
import { OpzResourcesComponent } from './resources/resources.component';
import { OpzStaffComponent } from './staff/staff.component';
import { OpzZoningComponent } from './zoning/zoning.component';

// Boards page component imports
import { CPBComponent } from './boards/cpb/cpb.component';
import { ECComponent } from './boards/ec/ec.component';
import { LHPCComponent } from './boards/lhpc/lhpc.component';
import { ZBAComponent } from './boards/zba/zba.component';

// Staff page components imports
import { LeadersComponent } from './staff/leaders/leaders.component';
import { PlannersComponent } from './staff/planners/planners.component';
import { SupportComponent } from './staff/support/support.component';

// Our City page components imports
import { MapPipelineComponent } from './ourcity/map-pipeline/map-pipeline.component';

import * as mapPieces from './ourcity/map-pipeline';

// Resources page component imports
import { ApplicationsDataComponent } from './resources/sub-pages/applications/applications.component';

import { SidePanelComponent } from './ourcity/sidepanel.component';

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

export const planningAboutComponents = [
  LeadersComponent,
  PlannersComponent,
  SupportComponent
];

export const planningMapComponents = [
  MapPipelineComponent,
  mapPieces.BasemapComponent,
  mapPieces.LayerComponent,
  mapPieces.WidgetComponent,
  mapPieces.MapComponent,
  SidePanelComponent
];

export const planningResComponents = [
  ApplicationsDataComponent
];
export const planningBoardsComponents = [
  CPBComponent,
  ECComponent,
  LHPCComponent,
  ZBAComponent
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

// Boards page component imports
export * from './boards/cpb/cpb.component';
export * from './boards/ec/ec.component';
export * from './boards/lhpc/lhpc.component';
export * from './boards/zba/zba.component';

// Staff page components exports
export * from './staff/leaders/leaders.component';
export * from './staff/planners/planners.component';
export * from './staff/support/support.component';

// Our City page components exports
export * from './ourcity/map-pipeline/map-pipeline.component';
export *  from './ourcity/sidepanel.component';

// Resources page components exports
export * from './resources/sub-pages/applications/applications.component';

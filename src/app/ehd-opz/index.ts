import { OpzAboutComponent } from './about/about.component';
import { OpzHomeComponent } from './home/home.component';
import { OurCityComponent } from './ourcity/ourcity.component';
import { OpzPlanningComponent } from './planning/planning.component';
import { OpzResourcesComponent } from './resources/resources.component';
import { OpzZoningComponent } from './zoning/zoning.component';

// About page components imports
import { LeadersComponent } from './about/leaders/leaders.component';
import { PlannersComponent } from './about/planners/planners.component';
import { SupportComponent } from './about/support/support.component';
import { ZonersComponent } from './about/zoners/zoners.component';

// Our City page components imports
import { MapPipelineComponent } from './ourcity/map-pipeline/map-pipeline.component';

import * as mapPieces from './ourcity/map-pipeline';

// Resources page component imports
import { ApplicationsDataComponent } from './resources/sub-pages/applications/applications.component';

export const planningComponents = [
  OpzAboutComponent,
  OpzHomeComponent,
  OurCityComponent,
  OpzPlanningComponent,
  OpzResourcesComponent,
  OpzZoningComponent
];

export const planningAboutComponents = [
  LeadersComponent,
  PlannersComponent,
  SupportComponent,
  ZonersComponent
];

export const planningMapComponents = [
  MapPipelineComponent,
  mapPieces
];

export const planningResComponents = [
  ApplicationsDataComponent
];

// page component exports
export * from './about/about.component';
export * from './home/home.component';
export * from './ourcity/ourcity.component';
export * from './planning/planning.component';
export * from './resources/resources.component';
export * from './zoning/zoning.component';

// About page components exports
export * from './about/leaders/leaders.component';
export * from './about/planners/planners.component';
export * from './about/support/support.component';
export * from './about/zoners/zoners.component';

// Our City page components exports
export * from './ourcity/map-pipeline/map-pipeline.component';

// Resources page components exports
export * from './resources/sub-pages/applications/applications.component';

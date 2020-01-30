export interface AirZones {
    zone: string;
    primaryUses: Array<string>;
    accessoryUses: Array<string>;
    buildingTypes: Array<string>;
    specialNotes?: Array<string>;
    zoneType: string;
}

export interface AirBulk {
    name: string;
    zones: string | Array<string>;
    note: string | Array<string>;
    minLotSize: Array<string>;
    minLotWidth: Array<string>;
    maxBuildingHeight: Array<string>;
    frontYard: Array<string>;
    sideYard: Array<string>;
    minRearYard: Array<string>;
    minLotAreaPerDwelling: Array<string>;
    maxLotCoverage: Array<string>;
    maxImperviousArea: Array<string>;
    minBuildTransparency: Array<string>;
    orientationPrimaryEntrance: Array<string>;
    activeGroundFloorReqs: Array<string>;
}

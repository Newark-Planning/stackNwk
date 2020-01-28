enum Bulks {
    maxBuildingHeight = 'Max Building Height';
    minLotSize = 'Min Lot Size',
    minLotWidth = 'Min Lot Width',
    frontYard = 'Front Yard',
    sideYard = 'Side Yard',
    minRearYard = 'Min Rear Yard',
    minLotAreaPerDwelling = 'Min Lot Area per Dwelling',
    maxLotCoverage = 'Max Lot Coverage by Building1',
    maxImperviousArea = 'Max Impervious (Paved) Yard Area'
}
export interface AirBulk {
    Name: string;
    Zones: string | Array<string>;
    [maxBuildingHeight: 'Max Building Height']: Array<string>;
    [minLotSize: 'Min Lot Size']: Array<string>;
    [minLotWidth: 'Min Lot Width']: Array<string>;
    [frontYard: 'Front Yard']: Array<string>;
    [sideYard: 'Side Yard']: Array<string>;
    [minRearYard: 'Min Rear Yard']: Array<string>;
    [minLotAreaPerDwelling: 'Min Lot Area per Dwelling']: Array<string>;
    [maxLotCoverage: 'Max Lot Coverage by Building1']: Array<string>;
    [maxImperviousArea: 'Max Impervious (Paved) Yard Area']: Array<string>;
    [minBuildTrans: 'Min Building Transparency']: Array<string>;
    [orientation: 'Orientation of Primary Entrance']: Array<string>;
    [activeGroundFloor: 'Active Ground Floor Reqs']: Array<string>;
}
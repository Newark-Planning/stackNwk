export interface BulkReqs {
    MinLotSize: number;
    MinLotWidth: number;
    MaxBuildingHeight: { height?: number; stories?: number | string; };
    FrontYard: Array<number>;
    FrontYardType: Array<string>;
    SideYard: Array<number>;
    SideYardType: Array<string>;
    MinRearYard: Array<number>;
    MinRearYardType: Array<string>;
    MaxLotCoverage: number | string;
    MaxImperviousArea?: { front?: number | string; rear?: number; };
}
export interface LotToSVGDimensions {
    driveway: { display: string; x: number; };
    envelope: { height: number; width: number; x: number; y: number; };
    frontYard: number;
    heightLine: { endCapsX: number; text: string; x: number; };
    lotHeight: (number);
    lotSize: number;
    lotWidth: number;
    rearYard: { height: number; y: number; };
    sideYard: { left: number; leftX: number; right: number; rightX: number; y: number; };
    viewBox: string;
    walkways: { center: number; height: number; stoop: { center: number; y: number; } };
    widthLine: { text: string; x1: number; x2: number; };
}

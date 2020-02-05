export interface BulkReqs {
    MinLotSize: number;
    MinLotWidth: number;
    MaxBuildingHeight: {
        height?: number;
        stories?: number;
    };
    FrontYard: Array<number>;
    FrontYardType?: Array<string> | boolean;
    SideYard: Array<number>;
    SideYardType?: Array<string>;
    MinRearYard: Array<number>;
    MinRearYardType?: Array<string>;
    MaxLotCoverage?: number;
    MaxImperviousArea?: {
        front?: number;
        rear?: number;
    };
}
export interface LotToSVGDimensions {
    driveway: {
        display: string;
        x: number;
    };
    envelope: {
        height: number;
        width: number;
        x: number;
        y: number;
    };
    frontYard: number;
    heightLine: {
        endCapsX: number;
        text: string;
        x: number;
    };
    lotHeight: (number);
    lotWidth: number;
    rearYard: {
        height: number;
        y: number;
    };
    sideYard: {
        left: number;
        leftX: number;
        right: number;
        rightX: number;
        y: number;
    };
    viewBox: string;
    walkways: {
        center: number;
        height: number;
        stoop: {
            center: number;
            y: number;
        }
    };
    widthLine: {
        text: string;
        x1: number;
        x2: number;
    };
}
export const getReqs = (zone: string, buildingType: string) => {
    switch (buildingType) {
        case 'One-family': {
            return (zone === 'R-1') ? {
                MinLotSize: 5000,
                MinLotWidth: 50,
                // tslint:disable-next-line: object-literal-sort-keys
                MaxBuildingHeight: {
                    height: 35,
                    stories: 3
                },
                FrontYard: [15],
                FrontYardType: false,
                SideYard: [ 5, 10 ],
                SideYardType: ['one', 'other'],
                MinRearYard: [30],
                MaxLotCoverage: 0.4,
                MaxImperviousArea: { front: 0.3, rear: 0.5 }
            } : {
                MinLotSize: 2500,
                MinLotWidth: 25,
                // tslint:disable-next-line: object-literal-sort-keys
                MaxBuildingHeight: {
                    height: 36,
                    stories: 3
                },
                FrontYard: [6],
                SideYard: [3],
                MinRearYard: [30],
                MaxLotCoverage: 0.5,
                MaxImperviousArea: { front: 0.65, rear: 0.3 }
            };
        }
        case 'Two-family': {
            return {
                MinLotSize: 2500,
                MinLotWidth: 25,
                // tslint:disable-next-line: object-literal-sort-keys
                MaxBuildingHeight: {
                    height: 36,
                    stories: 3
                },
                FrontYard: [6],
                SideYard: [3],
                MinRearYard: [30],
                MaxLotCoverage: 0.5,
                MaxImperviousArea: { front: 0.6, rear: 0.3 }
            };
        }
        case 'Three-family': {
            return {
                MinLotSize: 3500,
                MinLotWidth: 35,
                // tslint:disable-next-line: object-literal-sort-keys
                MaxBuildingHeight: {
                    height: 36,
                    stories: 3
                },
                FrontYard: [6],
                SideYard: [3],
                MinRearYard: [30],
                MaxLotCoverage: 0.55,
                MaxImperviousArea: { front: 0.55, rear: 0.75 }
            };
        }
        case 'Townhouse': {
            return {
                MinLotSize: 7000,
                MinLotWidth: 70,
                // tslint:disable-next-line: object-literal-sort-keys
                MaxBuildingHeight: {
                    height: 36,
                    stories: 3
                },
                FrontYard: [6],
                SideYard: [3],
                MinRearYard: [30],
                MaxLotCoverage: 0.6,
                MaxImperviousArea: { front: 0.55, rear: 0.15 }
            };
        }
        case 'Low-rise multifamily & Four-Family': {
            return {
                MinLotSize: 10000,
                MinLotWidth: 100,
                // tslint:disable-next-line: object-literal-sort-keys
                MaxBuildingHeight: {
                    height: 48,
                    stories: 4
                },
                FrontYard: [6],
                SideYard: [5],
                MinRearYard: [30],
                MaxLotCoverage: 0.66,
                MaxImperviousArea: { front: 0.55, rear: 0.3 }
            };
        }
        case 'Mid-rise multifamily': {
            return {
                MinLotSize: 10000,
                MinLotWidth: 100,
                // tslint:disable-next-line: object-literal-sort-keys
                MaxBuildingHeight: {
                    height: 96,
                    stories: 8
                },
                FrontYard: [6],
                SideYard: [5],
                MinRearYard: [30],
                MaxLotCoverage: 0.6,
                MaxImperviousArea: { front: 0.55, rear: 0.3 }
            };
        }
        case 'High-rise multifamily': {
            return {
                MinLotSize: 10000,
                MinLotWidth: 100,
                // tslint:disable-next-line: object-literal-sort-keys
                MaxBuildingHeight: {
                    height: 120,
                    stories: 10
                },
                FrontYard: [6],
                SideYard: [10],
                MinRearYard: [30],
                MaxLotCoverage: 0.66,
                MaxImperviousArea: { front: 0.55, rear: 0.3 }
            };
        }
        case 'Detached Commercial': {
            return {
                MinLotSize: 5000,
                MinLotWidth: 50,
                // tslint:disable-next-line: object-literal-sort-keys
                MaxBuildingHeight: {
                    height: (zone === 'MX-1') ? 48 : 96,
                    stories: (zone === 'MX-1') ? 4 : 8
                },
                FrontYard: [0, 5],
                FrontYardType: ['min', 'max'],
                SideYard: [0, 5],
                SideYardType: ['min', 'max'],
                MinRearYard: [ 25, 20 ],
                MinRearYardType: ['abuttingRes', 'abuttingNonRes'],
                MaxLotCoverage: 0.85,
                MaxImperviousArea: { front: 0.55, rear: 0.6 }
            };
        }
        case 'Industrial': {
            return {
                MinLotSize: 5000,
                MinLotWidth: 50,
                // tslint:disable-next-line: object-literal-sort-keys
                MaxBuildingHeight: {
                    height: (zone === 'MX-1') ? 48 : 96,
                    stories: (zone === 'MX-1') ? 4 : 8
                },
                FrontYard: [6],
                SideYard: [3],
                MinRearYard: [ 50, 20 ],
                MinRearYardType: ['abuttingRes', 'abuttingNonRes'],
                MaxLotCoverage: 0.85,
                MaxImperviousArea: { front: 0.55, rear: 0.3 }
            };
        }
        case 'University': {
            return {
                MinLotSize: 10000,
                MinLotWidth: 100,
                // tslint:disable-next-line: object-literal-sort-keys
                MaxBuildingHeight: {
                    height: 210,
                    stories: 20
                },
                FrontYard: [5, 10],
                FrontYardType: ['min', 'max'],
                SideYard: [5],
                MinRearYard: [30],
                MaxLotCoverage: 0.8,
                MaxImperviousArea: { front: 0.55, rear: 0.3 }
            };
        }
        case 'Hospital or Medical Institution': {
            return {
                MinLotSize: 10000,
                MinLotWidth: 100,
                // tslint:disable-next-line: object-literal-sort-keys
                MaxBuildingHeight: {
                    height: 210,
                    stories: 20
                },
                FrontYard: [5, 10],
                FrontYardType: ['min', 'max'],
                SideYard: [10],
                MinRearYard: [30],
                MaxLotCoverage: undefined,
                MaxImperviousArea: { front: 0.55, rear: 0.3 }
            };
        }
        case 'Schools (Elementary, Middle, High Schools)': {
            return {
                MinLotSize: 10000,
                MinLotWidth: 100,
                // tslint:disable-next-line: object-literal-sort-keys
                MaxBuildingHeight: {
                    height: 55,
                    stories: 5
                },
                FrontYard: [5, 10],
                FrontYardType: ['min', 'max'],
                SideYard: [5],
                MinRearYard: [30],
                MaxLotCoverage: 0.65,
                MaxImperviousArea: { front: 0.55, rear: 0.3 }
            };
        }
        case 'Place of Worship': {
            return {
                MinLotSize: 10000,
                MinLotWidth: 100,
                // tslint:disable-next-line: object-literal-sort-keys
                MaxBuildingHeight: {
                    height: 30,
                    stories: 2
                },
                FrontYard: [ 5, 10 ],
                SideYard: [5],
                MinRearYard: [20],
                MaxLotCoverage: 0.65,
                MaxImperviousArea: { front: 0.55, rear: 0.2 }
            };
        }
        default: {
            return {
                MinLotSize: 5000,
                MinLotWidth: 50,
                // tslint:disable-next-line: object-literal-sort-keys
                MaxBuildingHeight: {
                    height: 35,
                    stories: 3
                },
                FrontYard: [ 5, 10 ],
                FrontYardType: ['min', 'max'],
                SideYard: [5],
                MinRearYard: [30],
                MaxLotCoverage: 0.65,
                MaxImperviousArea: { front: 0.55, rear: 0.2 }
            };
        }
    }
};
export const buildingTypes = (zone: string) => {
    switch (zone) {
        case 'R-1': return ['One-family'];
        case 'R-2': return ['One-family', 'Two-family', 'Townhouse', 'Schools (Elementary, Middle, High Schools)', 'Place of Worship'];
        case 'R-3': return ['One-family', 'Two-family', 'Three-family', 'Townhouse', 'Schools (Elementary, Middle, High Schools)', 'Place of Worship'];
        case 'R-4': return ['One-family', 'Two-family', 'Three-family', 'Townhouse', 'Low-rise multifamily & Four-Family', 'Ground-floor commercial with commercial or residential above', 'Schools (Elementary, Middle, High Schools)', 'Place of Worship', 'Community Center, Stand-Alone Daycare or Preschool in a Non-residential Area, and other Civic Buildings'];
        case 'R-5': return ['Low-rise multifamily & Four-Family', 'Mid-rise multifamily', 'Ground-floor commercial with commercial or residential above', 'Schools (Elementary, Middle, High Schools)', 'Place of Worship', 'Community Center, Stand-Alone Daycare or Preschool in a Non-residential Area, and other Civic Buildings'];
        case 'R-6': return ['Low-rise multifamily & Four-Family', 'Mid-rise multifamily', 'High-rise multifamily', 'Ground-floor commercial with commercial or residential above', 'Schools (Elementary, Middle, High Schools)', 'Place of Worship', 'Community Center, Stand-Alone Daycare or Preschool in a Non-residential Area, and other Civic Buildings'];
        case 'C-1': return ['Low-rise multifamily & Four-Family', 'Ground-floor commercial with commercial or residential above', 'Schools (Elementary, Middle, High Schools)', 'Place of Worship', 'Community Center, Stand-Alone Daycare or Preschool in a Non-residential Area, and other Civic Buildings'];
        case 'C-2': return ['Ground-floor commercial with commercial or residential above', 'Schools (Elementary, Middle, High Schools)', 'Place of Worship', 'Community Center, Stand-Alone Daycare or Preschool in a Non-residential Area, and other Civic Buildings'];
        case 'C-3': return ['Ground-floor commercial with commercial or residential above', 'Detached commercial', 'Schools (Elementary, Middle, High Schools)', 'Place of Worship', 'Community Center, Stand-Alone Daycare or Preschool in a Non-residential Area, and other Civic Buildings'];
        case 'I-1': return ['Detached commercial', 'Industrial', 'Place of Worship'];
        case 'I-2': return ['Industrial'];
        case 'I-3': return ['Industrial'];
        case 'MX-1': return ['One-family', 'Two-family', 'Three-family', 'Townhouse', 'Low-rise multifamily & Four-Family', 'Ground-floor commercial with commercial or residential above', 'Detached commercial', 'Schools (Elementary, Middle, High Schools)', 'Place of Worship', 'Community Center, Stand-Alone Daycare or Preschool in a Non-residential Area, and other Civic Buildings'];
        case 'MX-2': return ['One-family', 'Two-family', 'Three-family', 'Townhouse', 'Low-rise multifamily & Four-Family', 'Ground-floor commercial with commercial or residential above', 'Industrial', 'Place of Worship', 'Community Center, Stand-Alone Daycare or Preschool in a Non-residential Area, and other Civic Buildings'];
        case 'MX-3': return ['Community Center, Stand-Alone Daycare or Preschool in a Non-residential Area, and other Civic Buildings', 'Detached commercial', 'Ground-floor commercial with commercial or residential above', 'High-rise multifamily', 'Mid-rise multifamily', 'Low-rise multifamily & Four-Family'];
        case 'EWR-S': return ['Detached commercial', 'Industrial'];
        case 'INST': return ['Townhouse', 'Low-rise multifamily & Four-Family', 'Mid-rise multifamily', 'Ground-floor commercial with commercial or residential above', 'University', 'Hospital or Medical Institution', 'Schools (Elementary, Middle, High Schools)', 'Place of Worship'];
        default: return [''];
}};
export const getDimensions = (newZone: string, bldgType: string) => {
    const currentReqs: BulkReqs = getReqs(newZone, bldgType);
    const lotHeight = currentReqs.MinLotSize / currentReqs.MinLotWidth;
    const halfLotWidth = currentReqs.MinLotWidth / 2;
    const leftBuffer = 15;
    const rightBuffer = 15;
    const topBuffer = 12.5;
    const bottomBuffer = 12.5;

    return {
        driveway: {
            display: (newZone === 'R-1') ? 'inherit' : 'none',
            x: rightBuffer + currentReqs.MinLotWidth - 10
        },
        envelope: {
            height: lotHeight - currentReqs.FrontYard[0] - currentReqs.MinRearYard[0],
            width: (newZone === 'R-1')
                ? currentReqs.MinLotWidth - currentReqs.SideYard[0] - currentReqs.SideYard[1]
                : currentReqs.MinLotWidth - (currentReqs.SideYard[0] * 2),
            x: currentReqs.SideYard[0] + leftBuffer,
            y: currentReqs.FrontYard[0] + topBuffer
        },
        frontYard: currentReqs.FrontYard[0],
        heightLine: {
            endCapsX: currentReqs.MinLotWidth + leftBuffer + 4 - 1.22,
            text: `translate(${currentReqs.MinLotWidth + leftBuffer + 4}, 62.67)`,
            x: currentReqs.MinLotWidth + leftBuffer + 4
        },
        lotHeight: (lotHeight),
        lotWidth: currentReqs.MinLotWidth,
        rearYard: {
            height: currentReqs.MinRearYard[0],
            y: topBuffer + currentReqs.FrontYard[0] + (lotHeight - currentReqs.FrontYard[0] - currentReqs.MinRearYard[0])
        },
        sideYard: {
            left: currentReqs.SideYard[0],
            leftX: leftBuffer,
            right: (currentReqs.SideYard[1]) ? currentReqs.SideYard[1] : currentReqs.SideYard[0],
            rightX: currentReqs.MinLotWidth + leftBuffer - (
                (currentReqs.SideYard[1]) ? currentReqs.SideYard[1] : currentReqs.SideYard[0]
                ),
            y: currentReqs.FrontYard[0] + topBuffer
        },
        viewBox: `0 0 ${currentReqs.MinLotWidth + leftBuffer + rightBuffer} ${lotHeight + topBuffer + bottomBuffer}`,
        walkways: {
            center: halfLotWidth + leftBuffer - 1.25,
            height: currentReqs.FrontYard[0] - 5,
            stoop: {
                center: halfLotWidth + leftBuffer - 3,
                y: currentReqs.FrontYard[0] + topBuffer - 2.5
            }
        },
        widthLine: {
            text: `translate(${halfLotWidth + leftBuffer}, 6.4)`,
            x1: currentReqs.MinLotWidth + leftBuffer,
            x2: leftBuffer
            }
    };
};

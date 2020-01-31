export interface BulkReqs {
    MinLotSize: number;
    MinLotWidth: number;
    MaxBuildingHeight?: {
        height?: number;
        stories?: number;
    };
    FrontYard?: number | {
        min?: number;
        max?: number;
    };
    SideYard: number | {
        one: number;
        other: number;
    } | {
        min: number;
        max: number;
    };
    MinRearYard?: number | {
        abuttingRes?: number;
        abuttingNonRes?: number;
    };
    MaxLotCoverage?: number;
    MaxImperviousArea?: {
        front?: number;
        rear?: number;
    };
}

export const getReqs = (zone: string, buildingType: string) => {
    let bulkreqs: BulkReqs;
    switch (buildingType) {
        case 'One-family': {
            (zone === 'R-1') ? bulkreqs = {
                MinLotSize: 5000,
                MinLotWidth: 50,
                // tslint:disable-next-line: object-literal-sort-keys
                MaxBuildingHeight: {
                    height: 35,
                    stories: 3
                },
                FrontYard: 15,
                SideYard: { one: 10, other: 5 },
                MinRearYard: 30,
                MaxLotCoverage: 0.4,
                MaxImperviousArea: { front: 0.3, rear: 0.5 }
            } : bulkreqs = {
                MinLotSize: 2500,
                MinLotWidth: 25,
                // tslint:disable-next-line: object-literal-sort-keys
                MaxBuildingHeight: {
                    height: 36,
                    stories: 3
                },
                FrontYard: 6,
                SideYard: 3,
                MinRearYard: 30,
                MaxLotCoverage: 0.5,
                MaxImperviousArea: { front: 0.65, rear: 0.3 }
            };

            return bulkreqs;
        }
        case 'Two-family': {
            bulkreqs = {
                MinLotSize: 2500,
                MinLotWidth: 25,
                // tslint:disable-next-line: object-literal-sort-keys
                MaxBuildingHeight: {
                    height: 36,
                    stories: 3
                },
                FrontYard: 6,
                SideYard: 3,
                MinRearYard: 30,
                MaxLotCoverage: 0.5,
                MaxImperviousArea: { front: 0.6, rear: 0.3 }
            };

            return bulkreqs;
        }
        case 'Three-family': {
            bulkreqs = {
                MinLotSize: 3500,
                MinLotWidth: 35,
                // tslint:disable-next-line: object-literal-sort-keys
                MaxBuildingHeight: {
                    height: 36,
                    stories: 3
                },
                FrontYard: 6,
                SideYard: 3,
                MinRearYard: 30,
                MaxLotCoverage: 0.55,
                MaxImperviousArea: { front: 0.55, rear: 0.75 }
            };

            return bulkreqs;
        }
        case 'Townhouse': {
            bulkreqs = {
                MinLotSize: 7000,
                MinLotWidth: 70,
                // tslint:disable-next-line: object-literal-sort-keys
                MaxBuildingHeight: {
                    height: 36,
                    stories: 3
                },
                FrontYard: 6,
                SideYard: 3,
                MinRearYard: 30,
                MaxLotCoverage: 0.6,
                MaxImperviousArea: { front: 0.55, rear: 0.15 }
            };

            return bulkreqs;
        }
        case 'Low-rise multifamily & Four-Family': {
            bulkreqs = {
                MinLotSize: 10000,
                MinLotWidth: 100,
                // tslint:disable-next-line: object-literal-sort-keys
                MaxBuildingHeight: {
                    height: 48,
                    stories: 4
                },
                FrontYard: 6,
                SideYard: 5,
                MinRearYard: 30,
                MaxLotCoverage: 0.66,
                MaxImperviousArea: { front: 0.55, rear: 0.3 }
            };

            return bulkreqs;
        }
        case 'Mid-rise multifamily': {
            bulkreqs = {
                MinLotSize: 10000,
                MinLotWidth: 100,
                // tslint:disable-next-line: object-literal-sort-keys
                MaxBuildingHeight: {
                    height: 96,
                    stories: 8
                },
                FrontYard: 6,
                SideYard: 5,
                MinRearYard: 30,
                MaxLotCoverage: 0.6,
                MaxImperviousArea: { front: 0.55, rear: 0.3 }
            };

            return bulkreqs;
        }
        case 'High-rise multifamily': {
            bulkreqs = {
                MinLotSize: 10000,
                MinLotWidth: 100,
                // tslint:disable-next-line: object-literal-sort-keys
                MaxBuildingHeight: {
                    height: 120,
                    stories: 10
                },
                FrontYard: 6,
                SideYard: 10,
                MinRearYard: 30,
                MaxLotCoverage: 0.66,
                MaxImperviousArea: { front: 0.55, rear: 0.3 }
            };

            return bulkreqs;
        }
        case 'Detached Commercial': {
            bulkreqs = {
                MinLotSize: 5000,
                MinLotWidth: 50,
                // tslint:disable-next-line: object-literal-sort-keys
                MaxBuildingHeight: {
                    height: (zone === 'MX-1') ? 48 : 96,
                    stories: (zone === 'MX-1') ? 4 : 8
                },
                FrontYard: {min: 0, max: 5},
                SideYard: { min: 0, max: 5 },
                MinRearYard: { abuttingRes: 25, abuttingNonRes: 20 },
                MaxLotCoverage: 0.85,
                MaxImperviousArea: { front: 0.55, rear: 0.6 }
            };

            return bulkreqs;
        }
        case 'Industrial': {
            bulkreqs = {
                MinLotSize: 5000,
                MinLotWidth: 50,
                // tslint:disable-next-line: object-literal-sort-keys
                MaxBuildingHeight: {
                    height: (zone === 'MX-1') ? 48 : 96,
                    stories: (zone === 'MX-1') ? 4 : 8
                },
                FrontYard: 6,
                SideYard: 3,
                MinRearYard: { abuttingRes: 50, abuttingNonRes: 20},
                MaxLotCoverage: 0.85,
                MaxImperviousArea: { front: 0.55, rear: 0.3 }
            };

            return bulkreqs;
        }
        case 'University': {
            bulkreqs = {
                MinLotSize: 10000,
                MinLotWidth: 100,
                // tslint:disable-next-line: object-literal-sort-keys
                MaxBuildingHeight: {
                    height: 210,
                    stories: 20
                },
                FrontYard: {min: 5, max: 10},
                SideYard: 5,
                MinRearYard: 30,
                MaxLotCoverage: 0.8,
                MaxImperviousArea: { front: 0.55, rear: 0.3 }
            };

            return bulkreqs;
        }
        case 'Hospital or Medical Institution': {
            bulkreqs = {
                MinLotSize: 10000,
                MinLotWidth: 100,
                // tslint:disable-next-line: object-literal-sort-keys
                MaxBuildingHeight: {
                    height: 210,
                    stories: 20
                },
                FrontYard: { min: 5, max: 10 },
                SideYard: 10,
                MinRearYard: 30,
                MaxLotCoverage: undefined,
                MaxImperviousArea: { front: 0.55, rear: 0.3 }
            };

            return bulkreqs;
        }
        case 'Schools (Elementary, Middle, High Schools)': {
            bulkreqs = {
                MinLotSize: 10000,
                MinLotWidth: 100,
                // tslint:disable-next-line: object-literal-sort-keys
                MaxBuildingHeight: {
                    height: 55,
                    stories: 5
                },
                FrontYard: { min: 5, max: 10 },
                SideYard: 5,
                MinRearYard: 30,
                MaxLotCoverage: 0.65,
                MaxImperviousArea: { front: 0.55, rear: 0.3 }
            };

            return bulkreqs;
        }
        case 'Place of Worship': {
            bulkreqs = {
                MinLotSize: 10000,
                MinLotWidth: 100,
                // tslint:disable-next-line: object-literal-sort-keys
                MaxBuildingHeight: {
                    height: 30,
                    stories: 2
                },
                FrontYard: { min: 5, max: 10 },
                SideYard: 5,
                MinRearYard: 20,
                MaxLotCoverage: 0.65,
                MaxImperviousArea: { front: 0.55, rear: 0.2 }
            };

            return bulkreqs;
        }
        default: {
            bulkreqs = {
                MinLotSize: 5000,
                MinLotWidth: 50,
                // tslint:disable-next-line: object-literal-sort-keys
                MaxBuildingHeight: {
                    height: 35,
                    stories: 3
                },
                FrontYard: { min: 5, max: 10 },
                SideYard: 5,
                MinRearYard: 30,
                MaxLotCoverage: 0.65,
                MaxImperviousArea: { front: 0.55, rear: 0.2 }
            };

            return bulkreqs;
        }
    }
};

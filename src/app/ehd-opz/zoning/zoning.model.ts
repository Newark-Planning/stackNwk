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
                FrontYard: 15,
                SideYard: { one: 10, other: 5 },
                MinRearYard: 30,
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
                FrontYard: 6,
                SideYard: 3,
                MinRearYard: 30,
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
                FrontYard: 6,
                SideYard: 3,
                MinRearYard: 30,
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
                FrontYard: 6,
                SideYard: 3,
                MinRearYard: 30,
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
                FrontYard: 6,
                SideYard: 3,
                MinRearYard: 30,
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
                FrontYard: 6,
                SideYard: 5,
                MinRearYard: 30,
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
                FrontYard: 6,
                SideYard: 5,
                MinRearYard: 30,
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
                FrontYard: 6,
                SideYard: 10,
                MinRearYard: 30,
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
                FrontYard: {min: 0, max: 5},
                SideYard: { min: 0, max: 5 },
                MinRearYard: { abuttingRes: 25, abuttingNonRes: 20 },
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
                FrontYard: 6,
                SideYard: 3,
                MinRearYard: { abuttingRes: 50, abuttingNonRes: 20},
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
                FrontYard: {min: 5, max: 10},
                SideYard: 5,
                MinRearYard: 30,
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
                FrontYard: { min: 5, max: 10 },
                SideYard: 10,
                MinRearYard: 30,
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
                FrontYard: { min: 5, max: 10 },
                SideYard: 5,
                MinRearYard: 30,
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
                FrontYard: { min: 5, max: 10 },
                SideYard: 5,
                MinRearYard: 20,
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
                FrontYard: { min: 5, max: 10 },
                SideYard: 5,
                MinRearYard: 30,
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
        case 'C-2': return ['Ground-floor commercial with commercial or residential above', 'Schools (Elementary, Middle, High Schools)",Place of Worship,"Community Center, Stand-Alone Daycare or Preschool in a Non-residential Area, and other Civic Buildings'];
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

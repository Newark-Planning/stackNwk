export interface Use {
    primaryUses: [{
        use: string;
        conditional?: boolean;
        longName?: string;
    }];
    accessoryUses: [{
        use: string;
        conditional?: boolean;
        longName?: string;
    }];
}

export interface Uses {
    residential: Use;
    commercial: Use;
    industrial: Use;
    other: Use;
}

export interface Zones {
    'R-1': Use;
    'R-2': Use;
    'R-3': Use;
    'R-4': Use;
    'R-5': Use;
    'R-6': Use;
    'C-1': Use;
    'C-2': Use;
    'C-3': Use;
    'I-1': Use;
    'MX-1': Use;
    'MX-2': Use;
    'INST': Use;
}

export interface ZoneUses {
    uses: Uses;
    zoningDistricts: Zones;
}

export interface BulkStandards {
    buildingTypes: BuildingTypes;
    zones: {
        'R-1': BuildingTypes;
        'R-2': Use;
        'R-3': Use;
        'R-4': Use;
        'R-5': Use;
        'R-6': Use;
        'C-1': Use;
        'C-2': Use;
        'C-3': Use;
        'I-1': Use;
        'MX-1': Use;
        'MX-2': Use;
        'INST': Use;
    };
    NotesFromPg114: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: Array<string>;
        6: Array<string>;
        7: Array<string>;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
    };
}

export interface BuildingTypes {
    'One-family': Bulks | this;
    'Two-family': Bulks | this;
    'Three-family': Bulks | this;
    'Townhouse': Bulks | this;
    'Low-rise multifamily & Four-Family': Bulks | this;
    'Mid-rise multifamily': Bulks | this;
    'High-rise multifamily': Bulks | this;
    'Ground-floor commercial with commercial or residential above': Bulks | this;
    'Detached commercial': Bulks | this;
    'Industrial': Bulks | this;
    'Hospital or Medical Institution': Bulks | this;
    'Schools (Elementary, Middle, High Schools)': Bulks | this;
    'University': Bulks | this;
    'Place of Worship': Bulks | this;
    'Community Center, Stand-Alone Daycare or Preschool in a Non-residential Area, and other Civic Buildings': Bulks | this;
}

export interface Bulks {
    'zones': Array<string>;
    'Notes': Array<string> | string;
    'Min Lot Size for Subdivision': {
        'If R-1'?: number;
        'Else'?: number;
    };
    'Min Lot Width for Subdivision': {
        'If R-1'?: number;
        'Else'?: number;
    };
    'Max Building Height': {
        'stories'?: number;
        'height'?: number;
        'If R-1, height'?: number;
        'notes'?: Array<string> | string;
    };
    'Front Yard': {
        'If R-1'?: Array<string> | string;
        'Else'?: Array<string> | string;
    };
    'Side Yard': {
        'If R-1'?: Array<string> | string;
        'Else'?: Array<string> | string;
    };
    'Min Rear Yard': {
        'If R-1'?: Array<any> | any;
        'Else'?: number | any;
    };
    'Min Lot Area per Dwelling': any | Array<string>;
    'Max Lot Coverage': {
        'If R-1'?: number | Array<any>;
        'Else'?: Array<any>;
    };
    'Max Impervious (Paved) Yard Area': {
        'Front Yard': {
            'If R-1'?: any;
            'Else'?: any;
            } | any;
        'Rear Yard': {
            'If R-1'?: any;
            'Else'?: any;
        },
        'notes'?: string;
    };
    'Min Building Transparency': {
        'Primary Front Facade'?: number | any,
        'Street-Facing Side & Rear Facades'?: number | any,
        'Non-Street-Facing Facades'?: string;
        'notes'?: Array<string> | string;
    };
    'Orientation of Primary Entrance': Array<string> | string;
    'Active Ground Floor Reqs': Array<string> | string;
}

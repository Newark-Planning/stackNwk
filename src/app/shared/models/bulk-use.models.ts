export interface Use {
    'primary-uses': [{
        use: string;
        conditional?: boolean;
        'long-name'?: string;
    }];
    'accessory-uses': [{
        use: string;
        conditional?: boolean;
        'long-name'?: string;
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
    'zoning-districts': Zones;
}

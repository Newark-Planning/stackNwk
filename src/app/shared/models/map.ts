// tslint:disable-next-line: interface-name
export interface IGeometry {
    type: string;
    coordinates: Array<number>;
}

// tslint:disable-next-line: interface-name
export interface IGeoJson {
    type: string;
    geometry: IGeometry;
    properties?: any;
    $key?: string;
}

export class GeoJson implements IGeoJson {
    type = 'Feature';
    geometry: IGeometry;

    constructor(public coordinates, public properties?: any) {
        this.geometry = {
            coordinates,
            type: 'Point'
        };
    }
}

// tslint:disable-next-line: max-classes-per-file
export class FeatureCollection {
    type = 'FeatureCollection';
    constructor(public features: Array<GeoJson>) { }
}

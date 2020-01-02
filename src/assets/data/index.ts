import * as parcels from './parcels';

const parcelSource = (sourceData: any, map: any) => {
    map.addSource('parcels', {
        data: sourceData,
        type: 'geojson'
    });
    map.addLayer({
        id: 'parcels_layer',
        paint: {
        'line-color': 'darkgrey',
        'line-opacity': 0.75,
        'line-width': 0.5
    },
        source: 'parcels',
        type: 'line'
    });
    map.addLayer({
        id: 'parcels_inner',
        layout: {},
        paint: {
            'fill-color': '#627BC1',
            'fill-opacity': [
                'case',
                ['boolean', ['feature-state', 'hover'], false],
                1,
                0.5
            ]
        },
        source: 'parcels',
        type: 'fill'
    });

};

export const loadlayer = (name: any, map: any) => {
    switch (name) {
        case 'Dayton':
            parcelSource(parcels.parcels_dayton, map);
            break;
        case 'Downtown':
            parcelSource(parcels.parcels_downtown, map);
            break;
        case 'Ironbound':
            parcelSource(parcels.parcels_ironbound, map);
            break;
        case 'Lincoln Park':
            parcelSource(parcels.parcels_lincoln_park, map);
            break;
        case 'West Side':
            parcelSource(parcels.parcels_west_side, map);
            break;
        default :
            return {};
    }
};

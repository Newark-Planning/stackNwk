import { parcels_dayton } from './parcels_dayton';
import { parcels_downtown } from './parcels_downtown';
import { parcels_ironbound } from './parcels_ironbound';
import { parcels_ironboundsouth } from './parcels_ironboundsouth';
import { parcels_southbroadvalley } from './parcels_southbroadvalley';

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
            parcelSource(parcels_dayton, map);
            break;
        case 'Central Business District':
            parcelSource(parcels_downtown, map);
            break;
        case 'Ironbound':
            parcelSource(parcels_ironbound, map);
            break;
        case 'South Ironbound':
            parcelSource(parcels_ironboundsouth, map);
            break;
        case 'South Broad Valley':
            parcelSource(parcels_southbroadvalley, map);
            break;
        default :
            return {};
    }
};

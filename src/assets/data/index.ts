import { parcels_dayton } from './parcels_dayton';
import { parcels_downtown } from './parcels_downtown';
import { parcels_ironbound } from './parcels_ironbound';
import { parcels_ironboundsouth } from './parcels_ironboundsouth';
import { parcels_southbroadvalley } from './parcels_southbroadvalley';

export const loadlayer = (name: any, map: any) => {
    switch (name) {
        case 'Dayton':
            map.addSource('dayton', { 
                data: parcels_dayton,
                type: 'geojson'
            });
            map.addLayer({
                id: 'dayton_parcels',
                paint: {
                    'line-color': 'darkgrey',
                    'line-opacity': 0.75,
                    'line-width': 0.5
                },
                source: 'dayton',
                type: 'line'
            });
            break;
        case 'Central Business District':
            map.addSource('cbd', {
                data: parcels_downtown,
                type: 'geojson'
            });
            break;
        case 'Ironbound':
            map.addSource('ironbound', {
                data: parcels_ironbound,
                type: 'geojson'
            });
            map.addLayer({
                id: 'ironbound_parcels',
                paint: {
                    'line-color': 'darkgrey',
                    'line-opacity': 0.75,
                    'line-width': 0.5
                },
                source: 'ironbound',
                type: 'line'
            });
            break;
        case 'Ironbound South':
            map.addSource('ironboundsouth', {
                data: parcels_ironboundsouth,
                type: 'geojson'
            });
            break;
        case 'South Broad Valley':
            map.addSource('southbroad', {
                data: parcels_southbroadvalley,
                type: 'geojson'
            });
            break;
        default :
            return {};
    }
};

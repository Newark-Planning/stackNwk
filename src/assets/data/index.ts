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
// tslint:disable-next-line: cyclomatic-complexity
export const loadlayer = (name: any, map: any) => {
    switch (name) {
        case 'Belmont':
            parcelSource(parcels.parcels_belmont, map);
            break;
        case 'Dayton':
            parcelSource(parcels.parcels_dayton, map);
            break;
        case 'Downtown':
            parcelSource(parcels.parcels_downtown, map);
            break;
        case 'Fairmount':
            parcelSource(parcels.parcels_fairmount, map);
            break;
        case 'Forest Hill':
            parcelSource(parcels.parcels_forest_hill, map);
            break;
        case 'Ironbound':
            parcelSource(parcels.parcels_ironbound, map);
            break;
        case 'Lincoln Park':
            parcelSource(parcels.parcels_lincoln_park, map);
            break;
        case 'Lower Broadway':
            parcelSource(parcels.parcels_lower_roseville, map);
            break;
        case 'Lower Clinton Hill':
            parcelSource(parcels.parcels_lower_roseville, map);
            break;
        case 'Lower Roseville':
            parcelSource(parcels.parcels_lower_roseville, map);
            break;
        case 'Mount Pleasant':
            parcelSource(parcels.parcels_mount_pleasant, map);
            break;
        case 'Newark Industrial District':
            parcelSource(parcels.parcels_newark_industrial_district, map);
            break;
        case 'North Broadway-Woodside':
            parcelSource(parcels.parcels_north_broadway_woodside, map);
            break;
        case 'Port District':
            parcelSource(parcels.parcels_port_district, map);
            break;
        case 'University Heights':
            parcelSource(parcels.parcels_university_heights, map);
            break;
        case 'Upper Clinton Hill':
            parcelSource(parcels.parcels_upper_clinton_hill, map);
            break;
        case 'Upper Roseville':
            parcelSource(parcels.parcels_upper_roseville, map);
            break;
        case 'Vailsburg':
            parcelSource(parcels.parcels_vailsburg, map);
            break;
        case 'Weequahic':
            parcelSource(parcels.parcels_weequahic, map);
            break;
        case 'West Side':
            parcelSource(parcels.parcels_west_side, map);
            break;
        default:
            return {};
    }
};

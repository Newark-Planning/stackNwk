export * from './air.service';
export * from './getregs.service';
export * from './carto.service';
export * from './map.service';
export * from './search.service';
export * from './mapid.service';
// import { Injectable } from '@angular/core';

// @Injectable()
// export class MapService {

//     parcelSource(sourceData: string, map: any): void {
//         map.addSource('parcels', {
//             data: sourceData,
//             type: 'geojson'
//         });
//         map.addLayer({
//             id: 'parcels_layer',
//             paint: {
//                 'line-color': 'darkgrey',
//                 'line-opacity': 0.75,
//                 'line-width': 0.5
//             },
//             source: 'parcels',
//             type: 'line'
//         });
//         map.addLayer({
//             id: 'parcels_inner',
//             layout: {},
//             paint: {
//                 'fill-color': '#627BC1',
//                 'fill-opacity': [
//                     'case',
//                     ['boolean', ['feature-state', 'hover'], false],
//                     0.5,
//                     0
//                 ]
//             },
//             source: 'parcels',
//             type: 'fill'
//         });

//     }
//     // tslint:disable-next-line: cyclomatic-complexity
//     loadlayer(name: any, map: any): void {
//         switch (name) {
//             case 'Belmont':
//                 this.parcelSource('assets/data/parcels/layer_parcels_Belmont.geojson', map);
//                 break;
//             case 'Dayton':
//                 this.parcelSource('assets/data/parcels/layer_parcels_Dayton.geojson', map);
//                 break;
//             case 'Downtown':
//                 this.parcelSource('assets/data/parcels/layer_parcels_Downtown.geojson', map);
//                 break;
//             case 'Fairmount':
//                 this.parcelSource('assets/data/parcels/layer_parcels_Fairmount.geojson', map);
//                 break;
//             case 'Forest Hill':
//                 this.parcelSource('assets/data/parcels/layer_parcels_Forest_Hill.geojson', map);
//                 break;
//             case 'Ironbound':
//                 this.parcelSource('assets/data/parcels/layer_parcels_Ironbound.geojson', map);
//                 break;
//             case 'Lincoln Park':
//                 this.parcelSource('assets/data/parcels/layer_parcels_Lincoln_Park.geojson', map);
//                 break;
//             case 'Lower Broadway':
//                 this.parcelSource('assets/data/parcels/layer_parcels_Lower_Broadway.geojson', map);
//                 break;
//             case 'Lower Clinton Hill':
//                 this.parcelSource('assets/data/parcels/layer_parcels_Lower_Clinton_Hill.geojson', map);
//                 break;
//             case 'Lower Roseville':
//                 this.parcelSource('assets/data/parcels/layer_parcels_Lower_Roseville.geojson', map);
//                 break;
//             case 'Mount Pleasant':
//                 this.parcelSource('assets/data/parcels/layer_parcels_Mount_Pleasant.geojson', map);
//                 break;
//             case 'Newark Industrial District':
//                 this.parcelSource('assets/data/parcels/layer_parcels_Newark_Industrial_District.geojson', map);
//                 break;
//             case 'North Broadway-Woodside':
//                 this.parcelSource('assets/data/parcels/layer_parcels_North_Broadway-Woodside.geojson', map);
//                 break;
//             case 'Port District':
//                 this.parcelSource('assets/data/parcels/layer_parcels_Port_District.geojson', map);
//                 break;
//             case 'University Heights':
//                 this.parcelSource('assets/data/parcels/layer_parcels_University_Heights.geojson', map);
//                 break;
//             case 'Upper Clinton Hill':
//                 this.parcelSource('assets/data/parcels/layer_parcels_Upper_Clinton_Hill.geojson', map);
//                 break;
//             case 'Upper Roseville':
//                 this.parcelSource('assets/data/parcels/layer_parcels_Upper_Roseville.geojson', map);
//                 break;
//             case 'Vailsburg':
//                 this.parcelSource('assets/data/parcels/layer_parcels_Vailsburg.geojson', map);
//                 break;
//             case 'Weequahic':
//                 this.parcelSource('assets/data/parcels/layer_parcels_Weequahic.geojson', map);
//                 break;
//             case 'West Side':
//                 this.parcelSource('assets/data/parcels/layer_parcels_West_Side.geojson', map);
//                 break;
//             default:
//                 return;
//         }
//     }
// }

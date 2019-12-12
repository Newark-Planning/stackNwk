import { Component, OnInit } from '@angular/core';
import carto from '@carto/carto-vl';
import mapboxgl from 'mapbox-gl';

import bbox from '@turf/bbox';
import { nwkHood } from '../../../assets/data/NwkNeighborhoods';

import { loadlayer } from '../../../assets/data/index';

@Component({
    selector: 'app-map',
    styleUrls: ['./map.component.scss'],
    template: `
        <div id='map' class='map clr-col-6' [ngStyle]="mapStyle"></div>
        <app-sidepanel [mapInput]='clicked' class='clr-col-6'></app-sidepanel>
        `
})

export class MapComponent implements OnInit {
    mapStyle = {
        'border-radius': '.5rem',
        bottom: 0,
        display: 'flex',
        height: '80vh',
        position: 'relative',
        top: 0
    };
    clicked;
    ngOnInit(): void {
        const map: any = new mapboxgl.Map({
            center: [-74.1723667, 40.735657],
            container: 'map',
            dragRotate: false,
            scrollZoom: false,
            style: carto.basemaps.positron,
            touchZoomRotate: false,
            zoom: 12
        });

        const nav = new mapboxgl.NavigationControl({
            showCompass: false,
            showZoom: true
        });
        map.addControl(nav, 'top-left');
        map.addControl(new mapboxgl.FullscreenControl(), 'top-left');
        carto.setDefaultAuth({
            apiKey: '0c3e2b7cbff1b34a35e1f2ce3ff94114493bd681',
            user: 'nzlur'
        });
        // tslint:disable-next-line: no-null-keyword
        let hoveredStateId = null;

        map.on('load', () => {
            map.addSource('hoodMap', {
                data: nwkHood,
                type: 'geojson'
            });
            map.addLayer({
                id: 'hoods',
                layout: {},
                paint: {
                    'line-color': '#627BC1',
                    'line-width': 2
                    },
                source: 'hoodMap',
                type: 'line'
            });
            map.addLayer({
                id: 'hoods-inner',
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
                source: 'hoodMap',
                type: 'fill'
            });
            map.addLayer({
                id: 'hoods-labels',
                layout: {
                    'text-field': ['get', 'NAME'],
                    'text-letter-spacing': 0.1,
                    'text-max-width': 5,
                    'text-transform': 'uppercase',
                    'text-variable-anchor': ['top', 'bottom', 'left', 'right']
                    },
                source: 'hoodMap',
                type: 'symbol'
            });
            map.resize();
            map.on('mousemove', 'hoods-inner', e => {
                if (e.features.length > 0) {
                    if (hoveredStateId) {
                        map.setFeatureState(
                            { source: 'hoodMap', id: hoveredStateId },
                            { hover: false }
                        );
                    }
                    hoveredStateId = e.features[0].id;
                    map.setFeatureState(
                        { source: 'hoodMap', id: hoveredStateId },
                        { hover: true }
                    );
                }
            });
            map.on('click', 'hoods-inner', e => {
                if (e.features.length > 0) {
                    const NAME = 'NAME';
                    this.clicked = e.features[0].properties[NAME];
                    const featurebound = bbox(e.features[0].geometry);
                    map.setFilter('hoods-inner', ['!=', 'NAME', this.clicked]);
                    map.fitBounds(featurebound);
                    loadlayer(e.features[0].properties[NAME], map);
                }
            });
        });
        // const layers = [hoodMapLayer];
        // layers.forEach(layer => layer.addTo(map, 'watername_ocean'));
    }
}

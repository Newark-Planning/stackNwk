import { Component, OnInit, Output } from '@angular/core';
import carto from '@carto/carto-vl';
import mapboxgl from 'mapbox-gl';

import bbox from '@turf/bbox';
import { nwkHood } from '../../../assets/data/NwkNeighborhoods';

import { loadlayer } from './parcels';

import { CartoService } from '../../shared/services';

import { CartoSQLResp, MapInput, ZoningFields } from '../../shared/models/map.input';
import { layersToAdd } from './layers';

@Component({
    selector: 'app-map',
    styleUrls: ['./map.component.scss'],
    template: `
        <div id='map' class='map clr-col-6 clr-col-12-md clr-col-12-sm' [ngStyle]="mapStyle"></div>
        <app-sidepanel [mapInput]='clicked' [propInfo]='propInfo' class='clr-col-6 clr-hidden-md-down'></app-sidepanel>
        `
})

export class MapComponent implements OnInit {
    @Output() readonly parcelView;
    mapStyle = {
        'border-radius': '.5rem',
        display: 'flex',
        height: '75vh',
        margin: 'auto',
        position: 'relative'
    };
    hoodClicked = '';
    lotClicked = '';
    hoveredStateId;
    parcelhover;
    clicked: MapInput = {hood: '', lot: ''};
    propInfo: ZoningFields = { code: '' };

    constructor(readonly cartodata: CartoService) {}

    ngOnInit(): void {
        const map: any = new mapboxgl.Map({
            center: [-74.1723667, 40.735657],
            container: 'map',
            dragRotate: false,
            maxZoom: 18,
            style: carto.basemaps.positron,
            touchZoomRotate: false,
            zoom: 12
        });

        const nav = new mapboxgl.NavigationControl({
            showCompass: false,
            showZoom: true
        });
        map.addControl(nav, 'top-left');
        carto.setDefaultAuth({
            apiKey: '0c3e2b7cbff1b34a35e1f2ce3ff94114493bd681',
            user: 'nzlur'
        });

        map.on('load', () => {
            map.addSource('hoodMap', {
                data: nwkHood,
                type: 'geojson'
            });
            layersToAdd.forEach(layer => map.addLayer(layer), 'watername_ocean');
            map.resize();
            map.on('mousemove', 'hoods-inner', e => {
                if (e.features.length > 0) {
                    if (this.hoveredStateId) {
                        map.setFeatureState(
                            { source: 'hoodMap', id: this.hoveredStateId },
                            { hover: false }
                        );
                    }
                    this.hoveredStateId = e.features[0].id;
                    map.setFeatureState(
                        { source: 'hoodMap', id: this.hoveredStateId },
                        { hover: true }
                    );
                }
            });
            const removal = () => {
                if (map.getLayer('parcels_inner')) { map.removeLayer('parcels_inner'); }
                if (map.getLayer('parcels_layer')) { map.removeLayer('parcels_layer'); }
                if (map.getSource('parcels')) { map.removeSource('parcels'); }
            };
            map.on('click', 'hoods-inner', e => {
                if (e.features.length > 0) {
                    removal();
                    const NAME = 'NAME';
                    this.hoodClicked = e.features[0].properties[NAME];
                    const featurebound = bbox(e.features[0].geometry);
                    map.setFilter('hoods-inner', ['!=', 'NAME', this.hoodClicked]);
                    map.fitBounds(featurebound);
                    loadlayer(e.features[0].properties[NAME], map);
                    this.clicked = {
                        block: undefined,
                        hood: this.hoodClicked,
                        lot: undefined
                    };
                }
            });
            map.on('mousemove', 'parcels_inner', e => {
                if (e.features.length > 0) {
                    if (this.parcelhover) {
                        map.setFeatureState(
                            { source: 'parcels', id: this.parcelhover },
                            { hover: false }
                        );
                    }
                    this.parcelhover = e.features[0].id;
                    map.setFeatureState(
                        { source: 'parcels', id: this.parcelhover },
                        { hover: true }
                    );
                }
            });
            map.on('click', 'parcels_inner', e => {
                if (e.features.length > 0) {
                    const PAMS_PIN = 'PAMS_PIN';
                    this.lotClicked = e.features[0].properties[PAMS_PIN];
                    const featurebound = bbox(e.features[0].geometry);
                    map.fitBounds(featurebound);
                    this.clicked.block = this.lotClicked.split('_')[1];
                    this.clicked.lot = this.lotClicked.split('_')[2];
                    this.getPropInfo(this.clicked);
                }
            });
        });
    }
    zoneLabel = (data: string) => `<a class="btn ${data}">${data}</a>`;

    getPropInfo(mapInputter: MapInput): void {
        // tslint:disable-next-line: no-non-null-assertion
        this.cartodata.getZoning('*', mapInputter.block!, mapInputter.lot!)
            .subscribe(
                ( data: CartoSQLResp ) => {
                    // tslint:disable-next-line: no-non-null-assertion
                    this.propInfo = data.rows[0]!;
                    // tslint:disable-next-line: no-non-null-assertion
                    this.clicked.labelStyle! = this.zoneLabel(this.propInfo.code ? this.propInfo.code : '');
                });
    }
}

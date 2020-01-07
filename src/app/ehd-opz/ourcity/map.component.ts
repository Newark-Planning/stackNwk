import { Component, OnInit, Output } from '@angular/core';
import carto from '@carto/carto-vl';
import mapboxgl from 'mapbox-gl';

import bbox from '@turf/bbox';
import { nwkHood } from '../../../assets/data/NwkNeighborhoods';

import { CartoService, MapService } from '../../shared/services';

import { CartoSQLResp, MapInput, ZoningFields } from '../../shared/models/map.input';
import { hoods, hoodsInner, hoodsLabels } from './layers';

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
    layersToAdd = [
        hoods,
        hoodsInner,
        hoodsLabels
    ];

    constructor(readonly cartodata: CartoService, readonly mapper: MapService) {}

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

        const zoningMapSource = new carto.source.Dataset(`
        public.zoning
      `);
        const zoningMapViz = new carto.Viz(`
        @code: $code
        @proploc: $proploc
        color: opacity(ramp(buckets($code,
        [
          "R-1","R-2","R-3","R-4",
          "C-1","C-2","C-3",
          "MX-1","MX-2","MX-3",
          "I-1","I-2","I-3","RDV",
          "PARK","INST","CEM",
          "PORT","EWR"
        ]), [
          #fffaca, #fff68f, #fff100, #ebd417,
          #a18aad, #da2028, #850204,
          #e4a024, #f37520, #FF2900,
          #e1c3dd, #A53ED5, #c0188c, #dddddd,
          #229A00, #0063ff, #561818,
          #B81609, #820c0c
        ]),0.7)
        strokeWidth: scaled(.1, 12)
        strokeColor: rgb(200, 200, 200)
      `);
        const zoningMapLayer = new carto.Layer('zoningMapLayer', zoningMapSource, zoningMapViz);
        const layers = [zoningMapLayer];
        layers.forEach(layer => layer.addTo(map, 'watername_ocean'));
        map.on('load', () => {
            map.addSource('hoodMap', {
                data: nwkHood,
                type: 'geojson'
            });
            this.layersToAdd.forEach(layer => map.addLayer(layer), 'watername_ocean');
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
            map.on('click', 'hoods-inner', e => {
                if (e.features.length > 0) {
                    const NAME = 'NAME';
                    this.hoodClicked = e.features[0].properties[NAME];
                    const featurebound = bbox(e.features[0].geometry);
                    map.setFilter('hoods-inner', ['!=', 'NAME', this.hoodClicked]);
                    map.fitBounds(featurebound);
                    this.mapper.loadlayer(e.features[0].properties[NAME], map);
                    this.clicked = {
                        block: undefined,
                        hood: this.hoodClicked,
                        lot: undefined
                    };
                }
            });
            map.on('mousemove', 'zoningMapLayer', e => {
                if (e.features.length > 0) {
                    if (this.parcelhover) {
                        map.setFeatureState(
                            { source: zoningMapSource, id: this.parcelhover },
                            { hover: false }
                        );
                    }
                    this.parcelhover = e.features[0].id;
                    map.setFeatureState(
                        { source: zoningMapSource, id: this.parcelhover },
                        { hover: true }
                    );
                }
            });
            map.on('click', 'zoningMapLayer', e => {
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

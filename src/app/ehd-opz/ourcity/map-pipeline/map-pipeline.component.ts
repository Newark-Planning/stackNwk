import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-zoning',
  styleUrls: ['../ourcity.component.scss'],
  templateUrl: './map-pipeline.component.html'
})

export class MapPipelineComponent implements OnInit {
  collapsed = true;
  mapNavStyle = {
    'background-color': 'oldlace',
    'border-radius': '.25rem',
    color: 'black',
    padding: '.25rem',
    position: 'absolute',
    top: '1rem'
  };

  ngOnInit(): void {
    // tslint:disable-next-line: no-require-imports
    const mapboxgl = require('mapbox-gl');
    // tslint:disable-next-line: no-require-imports
    const carto = require('@carto/carto-vl');
    // tslint:disable-next-line: no-require-imports
    const asBridge = require('@carto/airship-bridge');

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
      showCompass: false
    });
    map.addControl(nav, 'top-left');
    map.addControl(new mapboxgl.FullscreenControl(), 'top-left');
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
        strokeWidth: scaled(.15, 12)
        strokeColor: rgb(200, 200, 200)
      `);
    const zoningMapLayer = new carto.Layer('zoningMapLayer', zoningMapSource, zoningMapViz);
    const delay = 0;
    const clickedFeatureId: any = undefined;

    const hoodMapSource = new carto.source.Dataset(`
        public.neighborhoods2013
      `);
    const hoodMapViz = new carto.Viz(`
          color: opacity(#FFFFFF, 0.0)
          strokeColor: opacity(#229A00, 0.5)
          strokeWidth: scaled(2, 12)
          lineOpacity: 0.4
      `);
    const hoodMapLayer = new carto.Layer('hoodMapLayer', hoodMapSource, hoodMapViz);
    const hoodPopup = new carto.Interactivity(hoodMapLayer);

    hoodPopup.on('featureEnter', (event: any) => {
      event.features.forEach((feature: any) => {
        if (feature.id !== clickedFeatureId) {
          feature.strokeColor.blendTo('opacity(aqua, 0.8)', delay);
        }
      });
    });

    hoodPopup.on('featureLeave', (event: any) => {
      event.features.forEach((feature: any) => {
        if (feature.id !== clickedFeatureId) {
          feature.strokeColor.reset(delay);
        }
      });
    });
    const layers = [zoningMapLayer, hoodMapLayer];
    layers.forEach(layer => layer.addTo(map, 'watername_ocean'));
    // tslint:disable-next-line: no-non-null-assertion
    asBridge.VL.Legends.rampLegend('#legend',
      zoningMapLayer,
      'color',
      {
        dynamic: true
      }
    );
  }
}

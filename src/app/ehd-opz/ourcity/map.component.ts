import { Component, OnInit } from '@angular/core';
import carto from '@carto/carto-vl';
import { nwkHood } from '../../../assets/data/NwkNeighborhoods';

@Component({
    selector: 'app-map',
    styleUrls: ['./ourcity.component.scss'],
    templateUrl: './map.component.html'
})

export class MapComponent implements OnInit {
    collapsed = true;
    legendItems = [
        {
            icon: 'nodes',
            title: 'Neighborhoods'
        }
    ];
    mapStyle = {
        bottom: 0,
        display: 'flex',
        position: 'relative',
        top: 0,
        width: '100%'
    };
    ngOnInit(): void {
        // tslint:disable-next-line: no-require-imports
        const mapboxgl = require('mapbox-gl');

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
        const delay = 0;
        const clickedFeatureId: any = undefined;
        const hoodMapSource = new carto.source.GeoJSON(nwkHood);

        const hoodMapViz = new carto.Viz(`
          @v_features: viewportFeatures($NAME)

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

        hoodMapLayer.on('loaded', () => {
            map.addSource('labels', { type: 'geojson', data: undefined });
            const labelSource = map.getSource('labels');

            const layerUpdated = () => {
                const features = carto.Viz.variables.v_features.value;
                const geojsonFeatures = features.map(feature =>
                    ({
                        geometry: {
                            coordinates: feature.getRenderedCentroid(),
                            type: 'Point'
                        },
                        properties: {
                            // tslint:disable-next-line: no-string-literal
                            label_field: `${feature.properties['NAME']}`
                        },
                        type: 'Feature'
                    }));

                labelSource.setData({
                    features: geojsonFeatures,
                    type: 'FeatureCollection'
                });
            };

            hoodMapLayer.on('updated', layerUpdated);

            // Style labels
            map.addLayer({
                id: 'my-labels',
                layout: {
                    'text-field': '{label_field}',
                    'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
                    'text-letter-spacing': 0.1,
                    'text-max-width': 7,
                    'text-size': 10,
                    'text-transform': 'uppercase'
                },
                paint: {
                    'text-color': '#333',
                    'text-halo-blur': 0.5,
                    'text-halo-color': '#fff',
                    'text-halo-width': 1
                },
                source: 'labels',
                type: 'symbol'
            });
        });

        const layers = [hoodMapLayer];
        layers.forEach(layer => layer.addTo(map, 'watername_ocean'));
    }
}

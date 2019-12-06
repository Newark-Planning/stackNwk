import { Component } from '@angular/core';
import { Map } from 'leaflet';

import * as carto from '@carto/carto.js';

import { buildStyle } from './style';

@Component({
  selector: 'app-map',
  styleUrls: ['./map-pipeline.component.scss'],
  templateUrl: './map-pipeline.component.html'
})
export class MapPipelineComponent {
  map: Map;
  cartoClient: any;

  layerSource = 'SELECT * FROM listings WHERE price < 150';
  layerStyle = `
    #layer {
      marker-width: 5;
      marker-fill-opacity: 0.7;
      marker-allow-overlap: true;
      marker-line-width: 0;
      marker-comp-op: multiply;
    }
  `;

  constructor() {
    this.cartoClient = new carto.cartoClient({
      apiKey: '0c3e2b7cbff1b34a35e1f2ce3ff94114493bd681',
      user: 'nzlur'
    });
  }

  onMapCreated(map): void {
    this.map = map;
  }

  onWidgetDataChanged(data): void {
    this.layerStyle = buildStyle(data, ['#fcde9c', '#faa476', '#f0746e', '#e34f6f', '#dc3977', '#b9257a', '#7c1d6f']);
  }
}

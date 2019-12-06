import { Component, Input, OnInit } from '@angular/core';
import { Map, TileLayer } from 'leaflet';

@Component({
  selector: 'app-basemap',
  template: ''
})
export class BasemapComponent implements OnInit {
  @Input() map: Map;
  @Input() url: string;

  ngOnInit(): void {
    if (!this.map) { return; }

    new TileLayer(this.url).addTo(this.map);
  }
}

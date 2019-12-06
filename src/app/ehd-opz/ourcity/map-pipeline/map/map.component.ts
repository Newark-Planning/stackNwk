import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Map } from 'leaflet';

@Component({
  selector: 'app-carto-map',
  styleUrls: ['./map.component.scss'],
  templateUrl: './map.component.html'
})
export class MapComponent implements OnInit {
  map: Map;

  @Input() center: any;
  @Input() zoom: any;
  // tslint:disable-next-line: no-output-on-prefix prefer-output-readonly
  @Output() onMapCreated: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    this.map = new Map('map', {
      center: this.center,
      zoom: this.zoom
    });

    this.onMapCreated.emit(this.map);
  }
}
